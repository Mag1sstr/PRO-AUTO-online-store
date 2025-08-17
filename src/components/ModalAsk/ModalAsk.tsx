import styles from "./ModalAsk.module.scss";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import icon from "../../assets/icons/phone.svg";
import ModalInput from "../ModalInput/ModalInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { useLang } from "../../hooks/useLang";

function ModalAsk() {
  const { openAskModal, setOpenAskModal } = useModals();
  const { t, lang } = useLang();
  return (
    <ModalWrapper open={openAskModal} setOpen={setOpenAskModal}>
      <ModalTop
        text="Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции."
        setOpen={setOpenAskModal}
        // icon={icon}
        image={icon}
        title="Задать вопрос"
      />
      <div className={styles.content}>
        <ModalInput title={t[lang].modals.name} />
        <ModalInput title={t[lang].modals.tel} />
        <ModalInput title={t[lang].modals.email} />
        <ModalInput title={t[lang].modals.message} />

        <div className={styles.check}>
          <Checkbox />
          <p>
            Я согласен на <span>обработку персональных данных</span>
          </p>
        </div>
        <Button end red fontSize={12}>
          ОТПРАВИТЬ
        </Button>
      </div>
    </ModalWrapper>
  );
}

export default ModalAsk;
