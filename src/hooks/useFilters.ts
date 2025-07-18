import { useAppSelector } from "../store/store";

export function useFilters() {
  return useAppSelector((state) => state.filters);
}
