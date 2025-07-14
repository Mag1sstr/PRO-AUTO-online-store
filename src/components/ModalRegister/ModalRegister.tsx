import styles from "./ModalRegister.module.scss";
import { useLang } from "../../hooks/useLang";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import userImg from "../../assets/icons/user.png";
import ModalInput from "../ModalInput/ModalInput";
import Button from "../Button/Button";

function ModalRegister() {
  const { openRegModal, setOpenRegModal } = useModals();
  const { t, lang } = useLang();

  return (
    <ModalWrapper open={openRegModal} setOpen={setOpenRegModal}>
      <ModalTop
        title={t[lang].modals.reg.title}
        text={t[lang].modals.reg.text}
        setOpen={setOpenRegModal}
        image={userImg}
      />
      <div className={styles.main}>
        <div>
          <ModalInput title={t[lang].modals.name} />
          <ModalInput title={t[lang].modals.surname} />

          <ModalInput title={t[lang].modals.email} />
          <ModalInput title={t[lang].modals.password} />
        </div>
        <div className={styles.buttons}>
          <p>{t[lang].modals.reg.sec_btn}</p>
          <Button width={116} height={40} red>
            {t[lang].modals.reg.btn}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalRegister;
