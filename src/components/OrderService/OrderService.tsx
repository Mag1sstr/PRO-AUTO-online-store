import { forwardRef } from "react";
import styles from "./OrderService.module.scss";
import { useLang } from "../../hooks/useLang";
import ModalInput from "../ModalInput/ModalInput";
import Button from "../Button/Button";

interface IProps {
  title: string;
  bannerText: string;
  bannerImage: string;
  description: string;
}

const OrderService = forwardRef<HTMLDivElement, IProps>(
  ({ title, bannerImage, bannerText, description }, ref) => {
    const { t, lang } = useLang();
    return (
      <section ref={ref} className={styles.wrapper}>
        <div className="container">
          <div className={styles.center}>
            <h2 className={styles.title}>{title}</h2>
          </div>
          <div className={styles.banner}>
            <img src={bannerImage} alt="banner" />
            <p>{bannerText}</p>
          </div>
          <p className={styles.desc}>{description}</p>

          <div className={styles.switch}>
            <p>{t[lang].order_service.tabs.order}</p>
            <p>{t[lang].order_service.tabs.question}</p>
          </div>

          <div className={styles.form}>
            <div className={styles.form__row}>
              <div className={styles.left}>
                <ModalInput title="Ваше имя" />
                <ModalInput title="Ваше имя" />
                <ModalInput title="Ваше имя" />
              </div>
              <div className={styles.right}></div>
            </div>
            <Button red center>
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          </div>
        </div>
      </section>
    );
  }
);

export default OrderService;
