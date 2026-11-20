create extension if not exists pgcrypto;

create table public.flow_orders (
  id uuid primary key default gen_random_uuid(),
  commerce_order text not null unique,
  email text not null check (char_length(email) <= 254),
  items jsonb not null,
  subtotal integer not null check (subtotal >= 0),
  discount integer not null check (discount >= 0 and discount <= subtotal),
  amount integer not null check (amount = subtotal - discount),
  currency text not null default 'CLP' check (currency = 'CLP'),
  status text not null check (
    status in ('creating', 'initiation_failed', 'pending', 'paid', 'refunded', 'failed')
  ),
  marketing_consent boolean not null default false,
  meta_event_id text not null,
  meta_event_source_url text,
  meta_fbp text,
  meta_fbc text,
  meta_user_agent text check (meta_user_agent is null or char_length(meta_user_agent) <= 1000),
  flow_order text,
  flow_token_hash text unique check (
    flow_token_hash is null or flow_token_hash ~ '^[0-9a-f]{64}$'
  ),
  meta_purchase_claimed_at timestamptz,
  meta_purchase_sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index flow_orders_status_created_at_idx
  on public.flow_orders (status, created_at desc);

alter table public.flow_orders enable row level security;
revoke all on public.flow_orders from anon, authenticated;
grant usage on schema public to service_role;
grant select, insert, update on public.flow_orders to service_role;

create or replace function public.claim_flow_meta_purchase(p_order_id uuid)
returns setof public.flow_orders
language sql
security definer
set search_path = ''
as $$
  update public.flow_orders
  set meta_purchase_claimed_at = now()
  where id = p_order_id
    and marketing_consent
    and meta_purchase_sent_at is null
    and (
      meta_purchase_claimed_at is null
      or meta_purchase_claimed_at < now() - interval '60 seconds'
    )
  returning *;
$$;

revoke all on function public.claim_flow_meta_purchase(uuid) from public, anon, authenticated;
grant execute on function public.claim_flow_meta_purchase(uuid) to service_role;
