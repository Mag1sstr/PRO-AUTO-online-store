import { forwardRef, useState } from "react";
import styles from "./OrderService.module.scss";
import { useLang } from "../../hooks/useLang";
import ModalInput from "../ModalInput/ModalInput";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";

interface IProps {
  title: string;
  bannerText: string;
  bannerImage: string;
  description: string;
}

const OrderService = forwardRef<HTMLDivElement, IProps>(
  ({ title, bannerImage, bannerText, description }, ref) => {
    const [currentTab, setCurrentTab] = useState(0);
    const { t, lang } = useLang();

    const tabs = [
      {
        name: t[lang].order_service.tabs.order,
        // component: ,
      },
      {
        name: t[lang].order_service.tabs.question,
      },
    ];
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
            {tabs.map((el, i) => (
              <p
                onClick={() => setCurrentTab(i)}
                className={currentTab === i ? styles.active : ""}
              >
                {el.name}
              </p>
            ))}
          </div>

          {/* <div className={styles.form}>
            <p>Данные для заказа</p>
            <div className={styles.form__row}>
              <div className={styles.left}>
                <ModalInput title={t[lang].modals.name} />
                <ModalInput title={t[lang].modals.tel} />
                <ModalInput title={t[lang].modals.email} />
                <div className={styles.field}>
                  <p>Сообщение:</p>
                  <textarea></textarea>
                </div>
              </div>
              <div className={styles.right}>
                <img src={formOrderImage} alt="form-image" />
              </div>
            </div>
            <div className={styles.check}>
              <Checkbox check={check} setCheck={setCheck} />
              <p>
                Я согласен на
                <span> обработку персональных данных</span>
              </p>
            </div>
            <Button red center>
              ЗАКАЗАТЬ ЗВОНОК
            </Button>
          </div> */}
        </div>
      </section>
    );
  }
);

export default OrderService;
