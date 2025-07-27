import styles from "./CartDrop.module.scss";
import img1 from "../../assets/products/product.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
import { useDeleteCartItemMutation, useGetCartQuery } from "../../api/api";
import { useLang } from "../../hooks/useLang";
import { formatPrice } from "../../utils/formatPrice";
import { totalPrice } from "../../utils/totalPrice";
import type { MouseEvent } from "react";

function CartDrop() {
  const { data } = useGetCartQuery(null);
  const { openCart } = useModals();
  const { t, lang } = useLang();
  const navigate = useNavigate();

  const [deleteCartItem] = useDeleteCartItemMutation();

  const handleDeleteCartItem = (
    e: MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.stopPropagation();
    deleteCartItem(id);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${styles.wrapper} ${openCart && styles.open}`}
    >
      <div className={styles.inner}>
        {data?.items.map((el) => (
          <div
            key={el.product.id}
            onClick={() => navigate(ROUTES.PRODUCT(el.product.id))}
            className={styles.item}
          >
            <button
              onClick={(e) => handleDeleteCartItem(e, el.product.id)}
              className={styles.close}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 4L16 16" stroke="#A5A5A5" strokeWidth="4" />
                <path d="M16 4L4 16" stroke="#A5A5A5" strokeWidth="4" />
              </svg>
            </button>
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
