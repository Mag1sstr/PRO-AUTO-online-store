import styles from "./ModalLogin.module.scss";
import userImg from "../../assets/icons/user.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";

function ModalLogin() {
  const { openLoginModal, setOpenLoginModal } = useModals();

  return (
    <section
      onClick={() => setOpenLoginModal(false)}
      className={`${styles.wrapper} ${openLoginModal && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <img src={userImg} alt="" />
          </div>
          <div className={styles.info}>
            <div className={styles.title}>Авторизация</div>
            <p className={styles.text}>Войдите в свой аккаунт</p>
          </div>
          <svg
            className={styles.close}
            onClick={() => setOpenLoginModal(false)}
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4L16 16" stroke="white" strokeWidth="4" />
            <path d="M16 4L4 16" stroke="white" strokeWidth="4" />
          </svg>
        </div>
        <div className={styles.main}>
          <div className={styles.field}>
            <p>Почта:</p>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <p>Пароль:</p>
            <input type="password" />
          </div>
          <Button width={116} height={40} color="">
            Войти
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ModalLogin;
