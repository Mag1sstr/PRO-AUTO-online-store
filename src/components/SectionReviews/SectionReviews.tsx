import styles from "./SectionReviews.module.scss";
import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import SectionTitle from "../SectionTitle/SectionTitle";
import icon from "../../assets/reviews/person.jpg";

function SectionReviews() {
  const { t, lang } = useLang();
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <SectionTitle>{t[lang].reviews.title}</SectionTitle>
        <p className={styles.subtitle}>{t[lang].reviews.subtitle}</p>
        <div className={styles.review}>
          <div className={styles.top}>
            <ButtonArrow rotate />
            <div className={styles.avatar}>
              <div>
                <img src={icon} alt="icon" />
              </div>
            </div>
            <ButtonArrow />
          </div>
          <p className={styles.text}>
            Обратился за новыми каркасными щётками, в итоге уехал и со щётками и
            с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с
            адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый
            продавец!
          </p>
          <div className={styles.line}></div>
          <p className={styles.name}>Сергей</p>
          <p>Частный клиент</p>
        </div>
        <Button center fontSize={12} className={styles.btn}>
          {t[lang].reviews.btn}
        </Button>
      </div>
    </section>
  );
}

export default SectionReviews;
