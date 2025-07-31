import { useLang } from "../../../hooks/useLang";
import type { IDeliveryValues } from "../../../types/interfaces";
import Button from "../../Button/Button";
import styles from "./DeliveryStage.module.scss";
import { toast } from "react-toastify";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
  deliveryValues: IDeliveryValues;
  setDeliveryValues: (fn: (prev: IDeliveryValues) => IDeliveryValues) => void;
  handleSubmit: () => void;
}

function DeliveryStage({
  setMainStage,
  setCurrentStage,
  deliveryValues,
  setDeliveryValues,
  handleSubmit,
}: IProps) {
  const { t, lang } = useLang();

  const handleNextStage = () => {
    if (Object.values(deliveryValues).some((el) => el.length === 0)) {
      toast.error(t[lang].toast.inc_data);
    } else {
      handleSubmit();
      setMainStage(3);
      setCurrentStage((prev) => prev + 1);
    }
  };
  return (
    <>
      <section>
        <h3 className={styles.title}>Доставка</h3>
        <div className={styles.row}>
          <div className={styles.block}>
            <div className={styles.col}>
              <div className={styles.wrapper}>
                <p>Область</p>
                <input
                  type="text"
                  value={deliveryValues.area}
                  onChange={(e) =>
                    setDeliveryValues((prev) => ({
                      ...prev,
                      area: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.wrapper}>
                <p>Город или поселок</p>
                <input
                  type="text"
                  value={deliveryValues.city}
                  onChange={(e) =>
                    setDeliveryValues((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.block}>
            <div className={styles.col}>
              <div className={styles.wrapper}>
                <p>Улица</p>
                <input
                  type="text"
                  value={deliveryValues.street}
                  onChange={(e) =>
                    setDeliveryValues((prev) => ({
                      ...prev,
                      street: e.target.value,
                    }))
                  }
                />
              </div>
              <div className={styles.col__row}>
                <div className={styles.wrapper}>
                  <p>Дом</p>
                  <input
                    type="text"
                    value={deliveryValues.house}
                    onChange={(e) =>
                      setDeliveryValues((prev) => ({
                        ...prev,
                        house: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className={styles.wrapper}>
                  <p>Квартира</p>
                  <input
                    type="text"
                    value={deliveryValues.apartment}
                    onChange={(e) =>
                      setDeliveryValues((prev) => ({
                        ...prev,
                        apartment: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Button
        className={styles.next}
        red
        onClick={handleNextStage}
        width={350}
        height={50}
        end
      >
        Оформить заказ
      </Button>
    </>
  );
}

export default DeliveryStage;
