import { useEffect, type RefObject } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLDivElement>,
  fn: () => void,
) => {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        fn();
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
};
