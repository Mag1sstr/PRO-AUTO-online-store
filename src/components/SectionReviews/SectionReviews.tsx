import styles from "./SectionReviews.module.scss";
import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import ButtonArrow from "../ButtonArrow/ButtonArrow";
import SectionTitle from "../SectionTitle/SectionTitle";
import icon from "../../assets/reviews/person.jpg";
import { useMemo, useState } from "react";

function SectionReviews() {
  const [currReview, setCurrReview] = useState(0);
  const { t, lang } = useLang();
  const reviewsData = useMemo(
    () => [
      {
        name: "Сергей",
        review:
          "Обратился за новыми каркасными щётками, в итоге уехал и со щётками и с крутыми меховушками! Самый первый бокс на рынке на Нагорном, и с адекватными ценами! Обращаться к Андрею, очень толковый и отзывчивый продавец!",
      },
      {
        name: "Иван",
        review:
          "Заказывал комплект зимней резины через этот магазин. Очень порадовало, что цены оказались заметно ниже, чем в офлайн-магазинах в моём городе. Доставка заняла всего два дня, колёса привезли прямо домой, всё в оригинальной упаковке, без повреждений.",
      },
      {
        name: "Мария",
        review:
          "Приобрела моторное масло и фильтры для своей машины. Больше всего понравилось то, что менеджер в чате быстро уточнил модель авто и посоветовал именно тот вариант, который рекомендован производителем.",
      },
      {
        name: "Алексей",
        review:
          "Удобный сайт — смог найти нужные тормозные колодки буквально за пять минут. Поиск по VIN-коду работает отлично, сразу исключает ошибки. После оплаты на почту пришёл чек и трек-номер, чтобы отслеживать доставку.",
      },
      {
        name: "Ольга",
        review:
          "Очень понравился сервис! Заказывала аккумулятор для своего автомобиля, потому что старый совсем перестал держать заряд. Курьер приехал в удобное для меня время, был вежливым и даже помог установить аккумулятор на месте.",
      },
    ],
    []
  );

  const handleNext = () => {
    setCurrReview((prev) => (prev < reviewsData.length - 1 ? prev + 1 : 0));
  };
  const handlePrevios = () => {
    setCurrReview((prev) => (prev > 0 ? prev - 1 : reviewsData.length - 1));
  };
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <SectionTitle>{t[lang].reviews.title}</SectionTitle>
        <p className={styles.subtitle}>{t[lang].reviews.subtitle}</p>

        <div className={styles.review}>
          <div className={styles.top}>
            <ButtonArrow onClick={handlePrevios} rotate />
            <div className={styles.avatar}>
              <div>
                <img src={icon} alt="icon" />
              </div>
            </div>
            <ButtonArrow onClick={handleNext} />
          </div>
          <p className={styles.text}>{reviewsData[currReview].review}</p>
          <div className={styles.line}></div>
          <p className={styles.name}>{reviewsData[currReview].name}</p>
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
