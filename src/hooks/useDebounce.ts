import { useEffect, useState } from "react";

export function useDebounce(value: string, delay: number) {
  const [debValue, setDebValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value]);

  return debValue;
}
