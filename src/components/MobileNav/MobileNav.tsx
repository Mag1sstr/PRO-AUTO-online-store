import styles from "./MobileNav.module.scss";
import { useNavigate } from "react-router-dom";
import { useModals } from "../../hooks/useModals";
import { NAV_LINKS } from "../../constants/links";
function MobileNav() {
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
