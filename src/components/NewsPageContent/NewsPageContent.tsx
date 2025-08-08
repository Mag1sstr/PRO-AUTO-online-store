import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import styles from "./NewsPageContent.module.scss";

function NewsPageContent() {
  const { t, lang } = useLang();
  return (
    <section className={styles.wraper}>
      <div className="container">
        <div className={styles.center}>
          <h2 className={styles.title}>{t[lang].news.title}</h2>
          <p>Следите за новостями Pro auto</p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image__wrapper}>
              <img src="" alt="image" />
            </div>
            <div className={styles.card_content}>
              <p className={styles.card__date}></p>
              <h3 className={styles.card__title}></h3>
              <p className={styles.card__desc}></p>
              <Button>ЧИТАТЬ ПОДРОБНЕЕ</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPageContent;
