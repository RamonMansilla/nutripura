import { createHash } from "node:crypto";

export function createMetaEvent(eventName, order) {
  const userData = {
    em: [createHash("sha256").update(order.email.trim().toLowerCase()).digest("hex")],
  };
  if (order.metaFbp) userData.fbp = order.metaFbp;
  if (order.metaFbc) userData.fbc = order.metaFbc;
  if (order.metaUserAgent) userData.client_user_agent = order.metaUserAgent;

  return {
    event_name: eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: order.metaEventId,
    event_source_url: order.metaEventSourceUrl,
    action_source: "website",
    user_data: userData,
    custom_data: {
      currency: order.currency,
      value: order.amount,
      content_type: "product",
      content_ids: order.items.map((item) => item.id),
      contents: order.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
      })),
    },
  };
}
