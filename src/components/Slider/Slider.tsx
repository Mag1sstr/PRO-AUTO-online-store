import styles from "./Slider.module.scss";
import ban01 from "../../assets/banners/01.jpg";
import ban02 from "../../assets/banners/02.jpg";
import ban03 from "../../assets/banners/03.jpg";
import ban04 from "../../assets/banners/04.jpg";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

const banners = [
  { title: "НАДЕЖНЫЕ, КАЧЕСТВЕННЫЕ АККУМУЛЯТОРЫ", image: ban01 },
  { title: "ПРОФЕССИОНАЛЬНАЯ ПОМОЩЬ ВАШЕМУ АВТОМОБИЛЮ", image: ban02 },
  { title: "КОМАНДА ВЫСОКОКЛАССНЫХ СПЕЦИАЛИСТОВ", image: ban03 },
  { title: "ЗАБОТЛИВЫЙ СЕРВИС И СВОЕВРЕВЕННАЯ ИНФОРМАЦИЯ", image: ban04 },
];

function Slider() {
  const [step, setStep] = useState(0);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <>
      {/* <div className={styles.slider}> */}
      {banners.map((el, i) => (
        <Banner
          key={el.title}
          title={el.title}
          image={el.image}
          active={i === step}
        />
      ))}
      {/* <div
          className={styles.row}
          style={{ transform: `translateX(-${step * windowWidth}px)` }}
        >
          {banners.map((el) => (
            <img key={el} src={el} alt="" style={{ width: windowWidth }} />
          ))}
        </div> */}
      {/* </div> */}
      <div className={styles.switch}>
        {[...Array(banners.length)].map((_, i) => (
          <div
            key={i}
            className={`${styles.item} ${step === i && styles.active}`}
            onClick={() => setStep(i)}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Slider;
