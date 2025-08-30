import styles from "./ProductCardTypeList.module.scss";
import type { IProductData } from "../../types/interfaces";
import prodImg from "../../assets/products/product.png";
import { useLang } from "../../hooks/useLang";
import { formatPrice } from "../../utils/formatPrice";
import Counter from "../Counter/Counter";
import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import {
  setProductCount,
  setProductId,
} from "../../store/slices/selectProductSlice";
import { useModals } from "../../hooks/useModals";
import Button from "../Button/Button";
import { toast } from "react-toastify";

function ProductCardTypeList(el: IProductData) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);
  const { t, lang } = useLang();
  const { setOpenAddProduct } = useModals();

  const handleAddToCart = () => {
    if (el.available === 1) {
      dispatch(setProductCount(count === 0 ? 1 : count));
      dispatch(setProductId(el.id));
      setOpenAddProduct(true);
    } else {
      toast.error(t[lang].toast.not_available);
    }
  };
  return (
    <div
      className={`${styles.card} ${
        el.available === 0 && styles.not__available
      }`}
    >
      <div className={styles.available}>
        {el.available === 0
          ? t[lang].filters.not_available
          : t[lang].filters.available}
      </div>
      <div className={styles.row}>
        <div className={styles.image__wrapper}>
          <img src={prodImg} alt="image" />
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.title}>{el.name}</p>
            <p className={styles.desc}>{el.description}</p>
            <ul className={styles.list}>
              <li>
                Производитель: <span>{el.manufacturer}</span>
              </li>
              <li>
                Категория: <span>{el.category?.name}</span>
              </li>
            </ul>
          </div>
          <div className={styles.right}>
            <p className={styles.price}>{formatPrice(el.price)} тг.</p>
            <div className={styles.buttons}>
              <Counter count={count} setCount={setCount} />
              <button onClick={handleAddToCart} className={styles.add}>
                <p>в корзину</p>
                <span></span>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 1L17.1035 11H4"
                    stroke="#C53720"
                    strokeWidth="2"
                  />
                  <path d="M5 0L5 11.6667" stroke="#C53720" strokeWidth="2" />
                  <path d="M5 1L0 1" stroke="#C53720" strokeWidth="2" />
                  <circle
                    cx="14.4002"
                    cy="16.8"
                    r="2.2"
                    stroke="#C53720"
                    strokeWidth="2"
                  />
                  <circle
                    cx="7.2"
                    cy="16.8"
                    r="2.2"
                    stroke="#C53720"
                    strokeWidth="2"
                  />
                  <path d="M9 3L15 3" stroke="#C53720" strokeWidth="2" />
                  <path
                    d="M12 6V-1.78814e-07"
                    stroke="#C53720"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              <Button red onClick={handleAddToCart}>
                {t[lang].catalog.product_card.btn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardTypeList;
