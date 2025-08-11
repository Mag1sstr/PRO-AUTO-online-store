import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionAsk.module.scss";

function SectionAsk() {
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
          <div className={styles.field}>
            <p>Ваше имя:*</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionAsk;
