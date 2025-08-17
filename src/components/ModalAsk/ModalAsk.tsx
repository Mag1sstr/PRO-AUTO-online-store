import styles from "./ModalAsk.module.scss";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import icon from "../../assets/icons/phone.svg";

function ModalAsk() {
  const { openAskModal, setOpenAskModal } = useModals();
  return (
    <ModalWrapper open={openAskModal} setOpen={setOpenAskModal}>
      <ModalTop
        text=""
        setOpen={setOpenAskModal}
        icon={icon}
        title="Задать вопрос"
      />
    </ModalWrapper>
  );
}

export default ModalAsk;
