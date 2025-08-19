import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionReviews.module.scss";

function SectionReviews() {
  const { t, lang } = useLang();
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <SectionTitle>{t[lang].reviews.title}</SectionTitle>
        <p className={styles.subtitle}>{t[lang].reviews.subtitle}</p>
        <Button>{t[lang].reviews.btn}</Button>
      </div>
    </section>
  );
}

export default SectionReviews;
