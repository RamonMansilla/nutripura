-- Nutrición Pura core schema. Independent project; use a dedicated Supabase database.
create extension if not exists pgcrypto;

create type public.lead_status as enum ('new', 'chatting', 'qualified', 'referred', 'customer', 'closed');
create type public.message_sender as enum ('visitor', 'bot', 'agent', 'system');

create table public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  name text not null,
  category text not null,
  description text not null,
  price_clp integer not null check (price_clp >= 0),
  compare_at_price_clp integer check (compare_at_price_clp is null or compare_at_price_clp >= price_clp),
  stock integer not null default 0 check (stock >= 0),
  image_url text,
  marketplace_url text not null check (marketplace_url ~ '^https://'),
  badge text,
  active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text,
  email text,
  phone text,
  source text not null default 'storefront',
  intent text,
  score smallint not null default 0 check (score between 0 and 100),
  status public.lead_status not null default 'new',
  consent_at timestamptz,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index leads_email_unique_when_present on public.leads (lower(email)) where email is not null;
create unique index leads_phone_unique_when_present on public.leads (phone) where phone is not null;
create index leads_status_created_at_idx on public.leads (status, created_at desc);

create table public.conversations (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads(id) on delete cascade,
  channel text not null default 'web',
  state text not null default 'open' check (state in ('open', 'waiting', 'resolved')),
  assigned_to uuid references auth.users(id) on delete set null,
  last_message_at timestamptz not null default now(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index conversations_lead_id_idx on public.conversations (lead_id);
create index conversations_state_last_message_idx on public.conversations (state, last_message_at desc);

create table public.messages (
  id uuid primary key default gen_random_uuid(),
  conversation_id uuid not null references public.conversations(id) on delete cascade,
  sender public.message_sender not null,
  content text not null check (char_length(content) <= 4000),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index messages_conversation_created_at_idx on public.messages (conversation_id, created_at);

create table public.automations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  trigger_type text not null,
  conditions jsonb not null default '[]'::jsonb,
  actions jsonb not null default '[]'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.automation_runs (
  id uuid primary key default gen_random_uuid(),
  automation_id uuid not null references public.automations(id) on delete cascade,
  lead_id uuid references public.leads(id) on delete set null,
  result text not null check (result in ('success', 'skipped', 'failed')),
  detail text,
  created_at timestamptz not null default now()
);

create table public.chatbot_settings (
  id boolean primary key default true check (id),
  display_name text not null default 'Mila',
  welcome_message text not null,
  objective text not null default 'qualify_and_refer',
  tone text not null default 'Cercano, claro y responsable',
  enabled boolean not null default true,
  updated_at timestamptz not null default now()
);

create table public.audit_events (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  event_type text not null,
  entity_type text not null,
  entity_id uuid,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger products_set_updated_at before update on public.products for each row execute function public.set_updated_at();
create trigger leads_set_updated_at before update on public.leads for each row execute function public.set_updated_at();
create trigger conversations_set_updated_at before update on public.conversations for each row execute function public.set_updated_at();
create trigger automations_set_updated_at before update on public.automations for each row execute function public.set_updated_at();
create trigger chatbot_settings_set_updated_at before update on public.chatbot_settings for each row execute function public.set_updated_at();

-- RLS is enabled everywhere. The public storefront can read only active products.
alter table public.products enable row level security;
alter table public.leads enable row level security;
alter table public.conversations enable row level security;
alter table public.messages enable row level security;
alter table public.automations enable row level security;
alter table public.automation_runs enable row level security;
alter table public.chatbot_settings enable row level security;
alter table public.audit_events enable row level security;

create policy "public can read active products" on public.products for select using (active = true);
create policy "anonymous visitors can create leads" on public.leads for insert with check (consent_at is not null);

-- Authenticated staff access is enabled only for users added to this database.
create policy "staff can manage products" on public.products for all to authenticated using (true) with check (true);
create policy "staff can manage leads" on public.leads for all to authenticated using (true) with check (true);
create policy "staff can manage conversations" on public.conversations for all to authenticated using (true) with check (true);
create policy "staff can manage messages" on public.messages for all to authenticated using (true) with check (true);
create policy "staff can manage automations" on public.automations for all to authenticated using (true) with check (true);
create policy "staff can read automation runs" on public.automation_runs for select to authenticated using (true);
create policy "staff can manage chatbot settings" on public.chatbot_settings for all to authenticated using (true) with check (true);
create policy "staff can read audit events" on public.audit_events for select to authenticated using (true);

insert into public.products (slug, name, category, description, price_clp, compare_at_price_clp, stock, marketplace_url, badge, sort_order)
values
  ('berberina-premium', 'Berberina Premium', 'Metabolismo', 'Complemento alimentario en cápsulas para acompañar hábitos diarios de bienestar.', 24990, 29990, 48, 'https://www.mercadolibre.cl/', 'Más vendido', 1),
  ('magnesio-triple', 'Magnesio Triple', 'Bienestar', 'Mezcla de tres formas de magnesio para incorporar a tu rutina de bienestar.', 18990, null, 31, 'https://www.mercadolibre.cl/', 'Nuevo', 2),
  ('omega-3-ultra', 'Omega 3 Ultra', 'Nutrición', 'Omega 3 en cápsulas para complementar una alimentación equilibrada.', 21990, null, 12, 'https://www.mercadolibre.cl/', null, 3);

insert into public.chatbot_settings (id, welcome_message)
values (true, '¡Hola! Soy Mila de Nutrición Pura. ¿En qué te puedo ayudar hoy?');

insert into public.automations (name, trigger_type, conditions, actions)
values
  ('Lead nuevo → Bienvenida', 'lead_created', '[{"field":"source","operator":"not_empty"}]', '[{"type":"send_welcome_message"}]'),
  ('Interés alto → Enviar enlace', 'lead_scored', '[{"field":"score","operator":"gte","value":75}]', '[{"type":"send_marketplace_link"}]');
