import styles from "./Services.module.scss";
import icon1 from "../../assets/services/01.svg";
import icon2 from "../../assets/services/02.svg";
import icon3 from "../../assets/services/03.svg";
import border from "../../assets/services/border.svg";
import person from "../../assets/services/person.png";
import { useLang } from "../../hooks/useLang";

function Services() {
  const { t, lang } = useLang();

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.center}>
          <h2 className={styles.title}>{t[lang].services.title}</h2>
          <p className={styles.text}>{t[lang].services.text}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.card} data-aos="fade-up">
              <div className={styles.icon__wrapper}>
                <img className={styles.icon} src={border} alt="" />

                <img src={icon1} alt="icon" />
              </div>
              <div className={styles.info}>
                <p className={styles.card__title}>
                  {t[lang].services.card_title1}
                </p>
                <p className={styles.card__text}>
                  {t[lang].services.card_text1}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-up">
              <div className={styles.icon__wrapper}>
                <img className={styles.icon} src={border} alt="" />

                <img src={icon2} alt="icon" />
              </div>
              <div className={styles.info}>
                <p className={styles.card__title}>
                  {t[lang].services.card_title2}
                </p>
                <p className={styles.card__text}>
                  {t[lang].services.card_text2}
                </p>
              </div>
            </div>
            <div className={styles.card} data-aos="fade-up">
              <div className={styles.icon__wrapper}>
                <img className={styles.icon} src={border} alt="" />

                <img src={icon3} alt="icon" />
              </div>
              <div className={styles.info}>
                <p className={styles.card__title}>
                  {t[lang].services.card_title3}
                </p>
                <p className={styles.card__text}>
                  {t[lang].services.card_text3}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.img} data-aos="fade-left">
            <img src={person} alt="person" />
            <svg
              className={styles.rec__big}
              width="127"
              height="120"
              viewBox="0 0 127 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M126.213 21.4106L45.583 119.669L0.803552 0.712411L126.213 21.4106Z"
                fill="#C53720"
              />
            </svg>
            <svg
              className={styles.rec__small}
              width="66"
              height="67"
              viewBox="0 0 66 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6711 0.825003L65.4362 48.5901L0.187886 66.0733L17.6711 0.825003Z"
                fill="#C53720"
              />
            </svg>
            <svg
              className={styles.rec__big__blur}
              width="127"
              height="120"
              viewBox="0 0 127 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M126.213 21.4106L45.583 119.669L0.803552 0.712411L126.213 21.4106Z"
                fill="#C53720"
              />
            </svg>
            <svg
              className={styles.rec__small__blur}
              width="66"
              height="67"
              viewBox="0 0 66 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6711 0.825003L65.4362 48.5901L0.187886 66.0733L17.6711 0.825003Z"
                fill="#C53720"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
