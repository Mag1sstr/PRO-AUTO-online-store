import { useLang } from "../../hooks/useLang";
import styles from "./MobileNav.module.scss";
import { ROUTES } from "../../routes/routes";
import { useNavigate } from "react-router-dom";
import { useModals } from "../../hooks/useModals";
function MobileNav() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const { openMobileNav, setOpenMobileNav } = useModals();

  const handleClose = () => {
    setOpenMobileNav(false);
  };
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
        <li className={styles.link} onClick={() => navigate(ROUTES.COMPANY)}>
          {t[lang].header.company}
        </li>

        <li className={styles.link} onClick={() => navigate(ROUTES.CATALOG)}>
          {t[lang].header.catalog}
        </li>

        <li className={styles.link} onClick={() => navigate(ROUTES.SERVICES)}>
          {t[lang].header.services}
        </li>
        <li className={styles.link}>{t[lang].header.info}</li>
        <li className={styles.link}>{t[lang].header.contacts}</li>
      </ul>
    </div>
  );
}

export default MobileNav;
