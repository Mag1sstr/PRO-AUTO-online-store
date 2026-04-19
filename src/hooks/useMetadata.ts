import { useEffect } from "react";

export const useMetadata = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, []);
};
