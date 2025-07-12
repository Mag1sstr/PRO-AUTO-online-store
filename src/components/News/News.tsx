import { useLang } from "../../hooks/useLang";
import styles from "./News.module.scss";
import img1 from "../../assets/news/01.jpg";
import img2 from "../../assets/news/02.jpg";
import img3 from "../../assets/news/03.jpg";

function News() {
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
        <div className={styles.center}>
          <h2 className={styles.title}>{t[lang].news.title}</h2>
        </div>
        <div className={styles.row}>
          {NEWS_DATA.map((el, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.image__wrapper}>
                <img src={el.img} alt="" />
              </div>
              <div className={styles.content}>
                <p className={styles.date}>{el.date}</p>
                <p className={styles.text}>{el.text}</p>
                <div className={styles.end}>
                  <svg
                    width="51"
                    height="20"
                    viewBox="0 0 51 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z"
                      fill="#C53720"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;
