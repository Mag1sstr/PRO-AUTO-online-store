import styles from "./NewsPageContent.module.scss";
import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import proautoImg from "../../assets/news/proauto.jpg";
import img1 from "../../assets/news/01.jpg";
import img2 from "../../assets/news/02.jpg";
import img3 from "../../assets/news/03.jpg";
import NewsCard from "../NewsCard/NewsCard";
import SectionTitle from "../SectionTitle/SectionTitle";

function NewsPageContent() {
  const { t, lang } = useLang();

  const NEWS_DATA = [
    {
      text: t[lang].news.card_title1,
      date: t[lang].news.card_date1,
      img: img1,
    },
    {
      text: t[lang].news.card_title2,
      date: t[lang].news.card_date2,
      img: img2,
    },
    {
      text: t[lang].news.card_title3,
      date: t[lang].news.card_date3,
      img: img3,
    },
  ];
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <SectionTitle>{t[lang].news.title}</SectionTitle>
        <p className={styles.text}>Следите за новостями Pro auto</p>
        <div className={styles.main__news}>
          <div className={styles.image__wrapper}>
            <img src={proautoImg} alt="image" />
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
        <div className={styles.row}>
          {NEWS_DATA.map((el, i) => (
            <NewsCard key={i} {...el} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsPageContent;
