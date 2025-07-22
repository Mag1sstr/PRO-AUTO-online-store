import type { ICartResponse } from "../types/interfaces";

export function totalPrice(arr: ICartResponse | undefined): number | undefined {
  const total = arr?.items.reduce(
    (acc, el) => acc + el.count * el.product.price,
    0
  );
  return total;
}
