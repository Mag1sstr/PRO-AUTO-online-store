import styles from "./ModalLogin.module.scss";
import userImg from "../../assets/icons/user.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import { useLang } from "../../hooks/useLang";
import ModalWrapper from "../ModalWrapper/ModalWrapper";

function ModalLogin() {
  const { openLoginModal, setOpenLoginModal } = useModals();
  const { t, lang } = useLang();

  return (
    <ModalWrapper open={openLoginModal} setOpen={setOpenLoginModal}>
      <ModalTop
        title={t[lang].modals.login.title}
        text={t[lang].modals.login.text}
        image={userImg}
        setOpen={setOpenLoginModal}
      />

      <div className={styles.main}>
        <div>
          <div className={styles.field}>
            <p>Почта:</p>
            <input type="text" />
          </div>
          <div className={styles.field}>
            <p>Пароль:</p>
            <input type="password" />
          </div>
        </div>
        <div className={styles.buttons}>
          <p>Создать новый аккаунт</p>
          <Button width={116} height={40} red>
            Войти
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalLogin;
