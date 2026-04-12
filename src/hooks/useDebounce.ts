import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debValue;
}
