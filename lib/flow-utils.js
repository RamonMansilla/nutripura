import { createHmac } from "node:crypto";

const products = Object.freeze({
  berberina: Object.freeze({ name: "Berberina Nutre Pure", price: 24990 }),
  magnesio: Object.freeze({ name: "Magnesium Complex Nutre Pure", price: 14850 }),
});

export function calculateOrder(items) {
  if (!Array.isArray(items) || items.length === 0 || items.length > 2) {
    throw new Error("El carrito no es válido.");
  }
  const normalized = [];
  const seen = new Set();
  for (const item of items) {
    const product = products[item?.id];
    const quantity = item?.quantity;
    if (
      !product ||
      seen.has(item.id) ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99
    ) {
      throw new Error("El carrito no es válido.");
    }
    seen.add(item.id);
    normalized.push({
      id: item.id,
      name: product.name,
      quantity,
      unitPrice: product.price,
    });
  }
  const subtotal = normalized.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const discount = Math.round(subtotal * 0.1);
  return { items: normalized, subtotal, discount, amount: subtotal - discount };
}

export function signFlowParams(params, secret) {
  const canonical = Object.keys(params)
    .sort()
    .map((key) => `${key}${params[key]}`)
    .join("");
  return createHmac("sha256", secret).update(canonical).digest("hex");
}

export function mapFlowStatus(status) {
  if (status === 2) return "paid";
  if (status === 1) return "pending";
  if (status === 5) return "refunded";
  if (status === 3 || status === 4) return "failed";
  return "pending";
}
