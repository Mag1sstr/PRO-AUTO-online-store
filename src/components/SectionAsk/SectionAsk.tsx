import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import SectionAskInput from "../SectionAskInput/SectionAskInput";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionAsk.module.scss";

function SectionAsk() {
  const { t, lang } = useLang();
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <SectionTitle color="white">ЗАДАТЬ ВОПРОС</SectionTitle>
        <div className={styles.text}>
          <p>
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором нужной продукции.
          </p>
        </div>

        <div className={styles.col}>
          <SectionAskInput name={t[lang].modals.name} />
          <SectionAskInput name={t[lang].modals.tel} />
          <SectionAskInput name={t[lang].modals.email} />
          <SectionAskInput name={t[lang].modals.name} textarea />

          <div className={styles.check}>
            <Checkbox />{" "}
            <p>
              Я согласен на <span>обработку персональных данных</span>
            </p>
          </div>
          <Button fontSize={12} end>
            ОТПРАВИТЬ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default SectionAsk;
