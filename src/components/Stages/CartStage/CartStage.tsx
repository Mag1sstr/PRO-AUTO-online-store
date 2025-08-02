import { useEffect } from "react";
import {
  useDecreaseCartItemMutation,
  useDeleteCartItemMutation,
  useIncreaseCartItemMutation,
} from "../../../api/api";
import type { ICart } from "../../../types/interfaces";
import { formatPrice } from "../../../utils/formatPrice";
import Button from "../../Button/Button";
import StageWrapper from "../StageWrapper/StageWrapper";
import styles from "./CartStage.module.scss";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

interface IProps {
  setMainStage: (stage: number) => void;
  setCurrentStage: (fn: (prev: number) => number) => void;
  data: ICart[] | undefined;
}

function CartStage({ setMainStage, setCurrentStage, data }: IProps) {
  const [increaseCartItem] = useIncreaseCartItemMutation();
  const [decreaseCartItem] = useDecreaseCartItemMutation();
  const [deleteCartItem] = useDeleteCartItemMutation();

  const navigate = useNavigate();
  const totalPrice = data?.reduce(
    (acc, el) => acc + el.count * el.product.price,
    0
  );

  const handleNextStage = () => {
    setMainStage(1);
    setCurrentStage((prev) => prev + 1);
  };
  const handleDeleteCartItem = (id: number) => {
    deleteCartItem(id);
  };
  const handleIncreaseCartItem = (id: number) => {
    increaseCartItem(id);
  };
  const handleDecreaseCartItem = (id: number, count: number) => {
    if (count > 1) decreaseCartItem(id);
  };

  useEffect(() => {
    if (!data?.length) {
      navigate(ROUTES.HOME);
    }
  }, [data]);

  return (
    <>
      <StageWrapper>
        <h3 className={styles.title}>Корзина</h3>
        <div className={styles.inner}>
          <div className={styles.details}>
            <p>Наименование товара</p>
            <p>Количество</p>
            <p>Цена</p>
          </div>
          <div className={styles.col}>
            {data?.map(({ count, product: { id, code, name, price } }) => (
              <div key={id} className={styles.item}>
                <div className={styles.info}>
                  <p className={styles.name}>{name}</p>
                  <div className={styles.info__row}>
                    Артикул: {code}{" "}
                    <span onClick={() => handleDeleteCartItem(id)}>
                      Удалить из корзины
                    </span>
                  </div>
                </div>
                <div className={styles.counter}>
                  <div className={styles.counter__row}>
                    <button onClick={() => handleDecreaseCartItem(id, count)}>
                      -
                    </button>
                    <div className={styles.count}>{count}</div>
                    <button onClick={() => handleIncreaseCartItem(id)}>
                      +
                    </button>
                  </div>
                </div>
                <div className={styles.price}>
                  {formatPrice(price * count)} тг
                </div>
              </div>
            ))}
          </div>
          <div className={styles.bottom}>
            {/* <div className={styles.payment}>
              <p>Способ оплаты</p>
              <Select title="Оплата при получении" />
            </div> */}
            {!!totalPrice && (
              <div className={styles.total}>
                <p>Итого к оплате:</p> <span>{formatPrice(totalPrice)} тг</span>
              </div>
            )}
          </div>
        </div>
      </StageWrapper>
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

export default CartStage;
