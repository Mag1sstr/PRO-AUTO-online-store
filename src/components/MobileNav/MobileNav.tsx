import styles from "./MobileNav.module.scss";
import { useNavigate } from "react-router-dom";
import { useModals } from "../../hooks/useModals";
import { useLang } from "../../hooks/useLang";
import { ROUTES } from "../../routes/routes";
function MobileNav() {
  const navigate = useNavigate();
  const { t, lang } = useLang();
  const { openMobileNav, setOpenMobileNav } = useModals();

  const handleClose = () => {
    setOpenMobileNav(false);
  };
  const NAV_LINKS = [
    { name: t[lang].header.company, path: ROUTES.COMPANY },
    { name: t[lang].header.catalog, path: ROUTES.CATALOG },
    { name: t[lang].header.services, path: ROUTES.SERVICES },
    { name: t[lang].header.info, path: ROUTES.INFO },
    { name: t[lang].header.contacts, path: ROUTES.CONTACTS },
  ];

  return (
    <div className={`${styles.wrapper} ${openMobileNav && styles.open}`}>
      <button className={styles.close} onClick={handleClose}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4L16 16" stroke="#A5A5A5" strokeWidth="4" />
          <path d="M16 4L4 16" stroke="#A5A5A5" strokeWidth="4" />
        </svg>
      </button>
      <ul className={styles.links} onClick={handleClose}>
        {NAV_LINKS.map((link, index) => (
          <li
            key={index}
            className={styles.link}
            onClick={() => navigate(link.path)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MobileNav;
