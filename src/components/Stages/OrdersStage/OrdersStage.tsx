import styles from "./OrdersStage.module.scss";
import type { IOrdersData } from "../../../types/interfaces";
import { formatPrice } from "../../../utils/formatPrice";
import emptyImg from "../../../assets/icons/no-order.png";
import { useLang } from "../../../hooks/useLang";

interface IProps {
  ordersData: IOrdersData[] | undefined;
}

function OrdersStage({ ordersData }: IProps) {
  const { t, lang } = useLang();
  return ordersData?.length ? (
    <div className={styles.orders}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t[lang].profile.tabs.orders.history}</h3>
        <div className={styles.details}>
          <p>{t[lang].profile.tabs.orders.num_order}</p>
          <p>{t[lang].profile.tabs.orders.name_order}</p>
          <p>{t[lang].profile.tabs.orders.date_order}</p>
          <p>{t[lang].profile.tabs.orders.price_order}</p>
        </div>
      </div>

      <div className={styles.col}>
        {ordersData?.map((item) => {
          const totalPrice = item.items.reduce(
            (acc, el) => acc + el.count * el.product.price,
            0
          );

          return (
            <div key={item.id} className={styles.order}>
              <div className={styles.container}>
                <div className={styles.order__row}>
                  <p className={styles.number}>
                    <span>Номер заказа</span> №{item.id}
                  </p>
                  <div className={styles.info}>
                    {item.items.map(({ product, count }) => (
                      <div key={product.id} className={styles.info__item}>
                        <p className={styles.name}>
                          <span>Наименование товара</span>
                          {product.name}
                        </p>
                        <p className={styles.count}>
                          {count} X {formatPrice(product.price)} тг
                        </p>
                      </div>
                    ))}
                  </div>
                  <p className={styles.date}>
                    <span>Дата заказа</span>
                    {new Date(item.created_at).toLocaleDateString()}
                  </p>
                  <p className={styles.price}>
                    <span>Стоимость</span>
                    {formatPrice(totalPrice)} тг
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <div className={styles.orders}>
      <div className={styles.empty}>
        <img src={emptyImg} alt="" />
        <p>У вас нет заказов</p>
      </div>
    </div>
  );
}

export default OrdersStage;
