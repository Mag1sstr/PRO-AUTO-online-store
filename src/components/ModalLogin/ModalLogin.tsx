import styles from "./ModalLogin.module.scss";
import userImg from "../../assets/icons/user.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import { useLang } from "../../hooks/useLang";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalInput from "../ModalInput/ModalInput";

function ModalLogin() {
  const { openLoginModal, setOpenLoginModal, setOpenRegModal } = useModals();
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
          <ModalInput title={t[lang].modals.email} />
          <ModalInput title={t[lang].modals.password} />
        </div>
        <div className={styles.buttons}>
          <p
            onClick={() => {
              setOpenRegModal(true);
              setOpenLoginModal(false);
            }}
          >
            {t[lang].modals.login.sec_btn}
          </p>
          <Button width={116} height={40} red>
            {t[lang].modals.login.btn}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalLogin;
