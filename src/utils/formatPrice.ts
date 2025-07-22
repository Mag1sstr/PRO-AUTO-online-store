export function formatPrice(price: number | string | undefined) {
  return price?.toLocaleString("ru-RU", {
    style: "decimal",
    currency: "RUB",
  });
}
