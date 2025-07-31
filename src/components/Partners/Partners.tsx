import styles from "./Partners.module.scss";
import partnerImg1 from "../../assets/partners/01.png";
import partnerImg2 from "../../assets/partners/02.png";
import partnerImg3 from "../../assets/partners/03.png";
import partnerImg4 from "../../assets/partners/04.png";
import partnerImg5 from "../../assets/partners/05.png";
import partnerImg6 from "../../assets/partners/06.png";
import partnerImg7 from "../../assets/partners/07.png";
import Button from "../Button/Button";

const partnersData = [
  { id: Math.random(), img: partnerImg1, title: "Компания «ПартКом»" },
  { id: Math.random(), img: partnerImg2, title: "Компания «АРМТЕК»" },
  { id: Math.random(), img: partnerImg3, title: "Компания «Бином»" },
  { id: Math.random(), img: partnerImg4, title: "Компания «Маслон»" },
  { id: Math.random(), img: partnerImg5, title: "ООО «Аккумуляторный Мир»" },
  { id: Math.random(), img: partnerImg6, title: "Компания «ЮНИКС» г. Киров" },
  { id: Math.random(), img: partnerImg7, title: "Компания «Фаворит»" },
];

function Partners() {
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.center}>
            <h2 className={styles.title} data-aos="fade-down">
              ПАРТНЕРЫ
            </h2>
          </div>
          <div className={styles.row}>
            {partnersData.map((el) => (
              <div key={el.id} className={styles.card} data-aos="fade-down">
                <div className={styles.image__wrapper}>
                  <img src={el.img} alt="" />
                </div>
                <div className={styles.footer}>
                  <p>{el.title}</p>
                </div>
              </div>
            ))}
          </div>
          <Button center padding="20px 40px">
            СТАТЬ ПАРТНЕРОМ
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Partners;
