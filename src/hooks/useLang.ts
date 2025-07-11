import { useContext } from "react";
import { LangContext } from "../contexts/LangContext";
import translateJSON from "../../public/locales/translation.json";

export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = translateJSON;
  return { t, lang, setLang };
}
