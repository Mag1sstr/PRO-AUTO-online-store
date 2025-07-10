import styles from "./AutoInfo.module.scss";
import cardImg1 from "../../assets/auto-info/01.jpg";
import cardImg2 from "../../assets/auto-info/02.jpg";
import cardImg3 from "../../assets/auto-info/03.jpg";
import cardImg4 from "../../assets/auto-info/04.jpg";
import cardImg5 from "../../assets/auto-info/05.jpg";
import cardImg6 from "../../assets/auto-info/06.jpg";
import Button from "../Button/Button";

const cards = [cardImg1, cardImg2, cardImg3, cardImg4, cardImg5, cardImg6];

function AutoInfo() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.center}>
            <h2 className={styles.title}>
              Автотовары: аксессуары, <br /> расходники и многое другое
            </h2>
            <p className={styles.text}>
              PROAuto - это специализированный интернет магазин востребованных
              товаров для автомобилей.
            </p>
          </div>
          <div className={styles.row}>
            {cards.map((el, i) => (
              <div
                key={i}
                className={styles.card}
                data-aos="fade-up"
                data-aos-delay={`${i * 200}`}
              >
                <img src={el} alt="" />
                <div className={styles.content}>
                  <p>КОМПРЕССОРЫ</p>
                  <Button width={216} height={52}>
                    ЗАКАЗАТЬ ОНЛАЙН
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoInfo;
