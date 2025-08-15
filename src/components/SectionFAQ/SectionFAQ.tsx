import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionFAQ.module.scss";

function SectionFAQ() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <SectionTitle color="white">F. A. Q</SectionTitle>
        <p className={styles.subtitle}>
          В данном разделе приведены ответа на часто задаваемые вопросы наших
          клиентов.
        </p>
      </div>
    </section>
  );
}

export default SectionFAQ;
