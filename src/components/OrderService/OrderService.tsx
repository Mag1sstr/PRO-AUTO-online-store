import { forwardRef, useState } from "react";
import styles from "./OrderService.module.scss";
import { useLang } from "../../hooks/useLang";
import ServiceForm from "../ServiceForm/ServiceForm";

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
        component: <ServiceForm />,
      },
      {
        name: t[lang].order_service.tabs.question,
        component: <ServiceForm question />,
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
                key={i}
                onClick={() => setCurrentTab(i)}
                className={currentTab === i ? styles.active : ""}
              >
                {el.name}
              </p>
            ))}
          </div>
          {tabs[currentTab].component}
        </div>
      </section>
    );
  }
);

export default OrderService;
