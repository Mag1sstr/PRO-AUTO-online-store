import styles from "./Slider.module.scss";
import ban01 from "../../assets/banners/01.jpg";
import ban02 from "../../assets/banners/02.jpg";
import ban03 from "../../assets/banners/03.jpg";
import ban04 from "../../assets/banners/04.jpg";
import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { useLang } from "../../hooks/useLang";

function Slider() {
  const [step, setStep] = useState(0);
  const { t, lang } = useLang();

  const banners = [
    { title: t[lang].banners.ban1, image: ban01 },
    { title: t[lang].banners.ban2, image: ban02 },
    { title: t[lang].banners.ban3, image: ban03 },
    { title: t[lang].banners.ban4, image: ban04 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep((prev) => (prev < banners.length - 1 ? prev + 1 : 0));
    }, 10000);

    return () => clearTimeout(timer);
  }, [step]);

  return (
    <>
      {banners.map((el, i) => (
        <Banner
          key={el.title}
          title={el.title}
          image={el.image}
          active={i === step}
        />
      ))}

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
