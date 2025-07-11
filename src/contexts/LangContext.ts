import { createContext } from "react";

export type TLang = "ru" | "en";

interface ILangContext {
  lang: TLang;
  setLang: (lang: TLang) => void;
}

export const LangContext = createContext({} as ILangContext);
