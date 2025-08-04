import { useModals } from "../../hooks/useModals";
import styles from "./ButtonBurger.module.scss";

function ButtonBurger() {
  const { setOpenMobileNav } = useModals();
  const handleOpen = () => {
    setOpenMobileNav(true);
  };
  return (
    <div className={styles.btn} onClick={handleOpen}>
      <span></span>
    </div>
  );
}

export default ButtonBurger;
