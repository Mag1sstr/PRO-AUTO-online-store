export function formatPrice(price: number | string) {
  return price.toLocaleString("ru-RU", {
    style: "decimal",
    currency: "RUB",
  });
}
