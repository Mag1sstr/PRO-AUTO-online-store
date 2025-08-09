import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import styles from "./NewsPageContent.module.scss";

function NewsPageContent() {
  const { t, lang } = useLang();
  return (
    <section className={styles.wrapper}>
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
            <div className={styles.card__content}>
              <p className={styles.card__date}>24 февраля 2020 года</p>
              <h3 className={styles.card__title}>
                МЫ ОБНОВИЛИСЬ. ТЕПЕРЬ У НАС НОВЫЙ ЛОГОТИП И ОБНОВЛЕННЫЙ САЙТ.
              </h3>
              <p className={styles.card__desc}>
                Мы рады ононсировать наш обновленный внешний мир. Мы не стоим на
                месте, постоянно развиваемся и улучшаем качество наших услуг, а
                также следим и за своим внешним видом.
              </p>
              <Button fontSize={12}>ЧИТАТЬ ПОДРОБНЕЕ</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsPageContent;
