import { useState } from "react";
import { LangContext, type TLang } from "./LangContext";

export default function LangContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [lang, setLang] = useState(
    (localStorage.getItem("lang") as TLang) ?? "ru"
  );

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}
