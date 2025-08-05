import styles from "./ServiceOverview.module.scss";
import cardImg1 from "../../assets/order-service/01.png";
import cardImg2 from "../../assets/order-service/02.png";
import Button from "../Button/Button";
import { useEffect, useRef, useState } from "react";
import OrderService from "../OrderService/OrderService";
import { useLang } from "../../hooks/useLang";
import diagnosImg from "../../assets/order-service/diagnos-banner.jpg";
import receptionImg from "../../assets/order-service/reception-banner.png";

const services = [
  {
    id: Math.random(),
    title: "ДИАГНОСТИКА АККУМУЛЯТОРА",
    service: "diagnostics",
    img: cardImg1,
  },
  {
    id: Math.random(),
    title: "ПРИЕМ АККУМУЛЯТОРОВ",
    service: "reception",
    img: cardImg2,
  },
];
function ServiceOverview() {
  const [selectService, setSelectService] = useState<string | null>(null);

  const { t, lang } = useLang();

  const diagnoscticsRef = useRef<HTMLDivElement | null>(null);
  const receptionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectService === "diagnostics") {
      diagnoscticsRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    } else if (selectService === "reception") {
      receptionRef.current?.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
    }
  }, [selectService]);

  return (
    <>
      <section className={styles.wrapper}>
        <div className="container">
          <div className={styles.center}>
            <h2 className={styles.title}>услуги</h2>
            <p className={styles.text}>
              Менеджеры компании с радостью ответят на ваши вопросы и помогут с
              выбором продукции.
            </p>
          </div>
          <div className={styles.row}>
            {services.map((el) => (
              <div key={el.id} className={styles.card}>
                <img src={el.img} alt="" />
                <div className={styles.content}>
                  <p>{el.title}</p>
                  <Button onClick={() => setSelectService(el.service)}>
                    ПОДРОБНЕЕ
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectService === "diagnostics" && (
        <OrderService
          ref={diagnoscticsRef}
          title={t[lang].order_service.diagnostics.title}
          bannerText={t[lang].order_service.diagnostics.banner_text}
          description={t[lang].order_service.diagnostics.desc}
          bannerImage={diagnosImg}
        />
      )}
    </>
  );
}

export default ServiceOverview;
