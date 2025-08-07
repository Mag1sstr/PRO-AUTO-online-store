import styles from "./ServiceForm.module.scss";
import { useState } from "react";
import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import ModalInput from "../ModalInput/ModalInput";
import formOrderImage from "../../assets/order-service/form1.jpg";
import formQuestionImage from "../../assets/order-service/form2.jpg";

interface IProps {
  question: boolean;
}
function ServiceForm({ question }: IProps) {
  const [check, setCheck] = useState(false);

  const { t, lang } = useLang();
  return (
    <div className={styles.form}>
      <p>Данные для заказа</p>
      <div className={styles.form__row}>
        <div className={styles.left}>
          <ModalInput title={t[lang].modals.name} />
          <ModalInput title={t[lang].modals.tel} />
          <ModalInput title={t[lang].modals.email} />
          <div className={styles.field}>
            <p>Сообщение:</p>
            <textarea></textarea>
          </div>
        </div>
        <div className={styles.right}>
          <img
            src={question ? formQuestionImage : formOrderImage}
            alt="form-image"
          />
        </div>
      </div>
      <div className={styles.check}>
        <Checkbox check={check} setCheck={setCheck} />
        <p>
          Я согласен на
          <span> обработку персональных данных</span>
        </p>
      </div>
      <Button red center>
        ЗАКАЗАТЬ ЗВОНОК
      </Button>
    </div>
  );
}

export default ServiceForm;
