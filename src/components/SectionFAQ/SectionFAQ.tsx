import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionFAQ.module.scss";
import Button from "../Button/Button";

function SectionFAQ() {
  const [drop, setDrop] = useState<number | null>(null);

  const handleDrop = (index: number | null) => {
    setDrop(index);
  };
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <SectionTitle color="white">F. A. Q</SectionTitle>
          <p className={styles.subtitle}>
            В данном разделе приведены ответа на часто задаваемые вопросы наших
            клиентов.
          </p>
          <div className={styles.switch}>
            <p>Общие вопросы</p>
            <p>Эксплуатация и уход</p>
          </div>
          <div className={styles.col}>
            {[...Array(5)].map((_, index) => (
              <div
                className={`${styles.details} ${index === drop && styles.drop}`}
                onClick={() => handleDrop(index === drop ? null : index)}
              >
                <div className={styles.icon}>
                  <svg
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="28"
                      cy="28"
                      r="22.5"
                      stroke="white"
                      strokeWidth="4"
                    />
                    <path d="M28 17.5L28 38.5" stroke="white" strokeWidth="4" />
                    <path d="M38.5 28H17.5" stroke="white" strokeWidth="4" />
                  </svg>
                </div>
                <p className={styles.details__title}>
                  Как часто нужно менять щётки стеклоочистителя?
                </p>

                <div className={styles.details__content}>
                  <p>
                    Мы привыкли эксплуатировать автомобиль, пока что-либо не
                    сломается. Так и со щётками - не заменим, пока совсем не
                    потеряем возможность видеть перед собой из-за грязного
                    лобового стекла. Следите за своими щётками и меняйте их
                    каждый сезон, ведь безопасность на дороге превыше всего!
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Button center>ЗАДАТЬ ВОПРОС</Button>
        </div>
      </div>
    </section>
  );
}

export default SectionFAQ;
