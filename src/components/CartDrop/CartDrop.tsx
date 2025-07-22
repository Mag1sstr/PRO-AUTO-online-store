import styles from "./CartDrop.module.scss";
import img1 from "../../assets/products/product.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { useGetCartQuery } from "../../api/api";
import { useLang } from "../../hooks/useLang";
import { formatPrice } from "../../utils/formatPrice";
import { totalPrice } from "../../utils/totalPrice";
function CartDrop() {
  const { data } = useGetCartQuery(null);
  const { openCart } = useModals();
  const { t, lang } = useLang();
  const navigate = useNavigate();

  console.log(data);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${styles.wrapper} ${openCart && styles.open}`}
    >
      <div className={styles.inner}>
        {data?.items.map((el) => (
          <div
            onClick={() => navigate(ROUTES.PRODUCT(el.product.id))}
            className={styles.item}
          >
            <div className={styles.left}>
              <div className={styles.image}>
                <img src={img1} alt="" />
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{el.product.name}</p>
                <div className={styles.row}>
                  <div className={styles.available}>
                    {t[lang].filters.available}
                  </div>
                  <p className={styles.price}>
                    {el.count} x {formatPrice(el.product.price)} тг.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <p>{t[lang].cart.cart_drop.result}</p>
        <div className={styles.bottom__row}>
          <p className={styles.total}>{formatPrice(totalPrice(data)!)} тг.</p>
          <Button
            onClick={() => navigate(ROUTES.CART)}
            red
            fontSize={14}
            className={styles.btn}
          >
            {t[lang].cart.cart_drop.btn}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartDrop;
