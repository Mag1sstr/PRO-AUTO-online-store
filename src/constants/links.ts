import { useLang } from "../hooks/useLang";
import { ROUTES } from "../routes/routes";

const { t, lang } = useLang();
export const NAV_LINKS = [
  { name: t[lang].header.company, path: ROUTES.COMPANY },
  { name: t[lang].header.catalog, path: ROUTES.CATALOG },
  { name: t[lang].header.services, path: ROUTES.SERVICES },
  { name: t[lang].header.info, path: ROUTES.INFO },
  { name: t[lang].header.contacts, path: ROUTES.CONTACTS },
];
