import styles from "./CartDrop.module.scss";
import img1 from "../../assets/products/product.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";
function CartDrop() {
  const { openCart } = useModals();
  const navigate = useNavigate();
  return (
    <div className={`${styles.wrapper} ${openCart && styles.open}`}>
      <div className={styles.inner}>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.image}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.info}>
              <p className={styles.title}>MAGNUM 60Ah</p>
              <div className={styles.row}>
                <div className={styles.available}>В НАЛИЧИИ</div>
                <p className={styles.price}>2199 руб.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>Итог</p>
        <div className={styles.bottom__row}>
          <p className={styles.total}>4398 руб.</p>
          <Button
            onClick={() => navigate(ROUTES.CART)}
            red
            fontSize={14}
            className={styles.btn}
          >
            ПЕРЕЙТИ В КОРЗИНУ
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartDrop;
