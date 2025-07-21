import styles from "./ProductCard.module.scss";
import Button from "../Button/Button";
import prodImg from "../../assets/products/product.png";
import type { IProductData } from "../../types/interfaces";
import { formatPrice } from "../../utils/formatPrice";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes/routes";

interface IProps extends IProductData {
  setSelectProduct?: (id: number) => void;
}

function ProductCard(el: IProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.card} ${
        el.available === 0 && styles.not__available
      }`}
    >
      {el.available === 1 ? (
        <div className={styles.available}>в наличии</div>
      ) : (
        <div className={`${styles.available} ${styles.not__available}`}>
          нет наличии
        </div>
      )}
      <div className={styles.image__wrapper}>
        <img src={prodImg} alt="image" />
      </div>
      <h3>{el.name}</h3>
      <p className={styles.price}>{formatPrice(el.price)} тг.</p>
      <p className={styles.desc}>{el.manufacturer}</p>
      <div className={styles.card__row}>
        <div className={styles.counter}>
          <div className={styles.counter__btn}>-</div>
          <p>00</p>
          <div className={styles.counter__btn}>+</div>
        </div>
        <div className={styles.add}>
          <svg
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 1L17.1035 11H4" stroke="#C53720" strokeWidth="2" />
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
            <path d="M12 6V-1.78814e-07" stroke="#C53720" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <Button
        onClick={() => navigate(ROUTES.PRODUCT(el.id))}
        className={styles.card__btn}
        width="100%"
        height={40}
        red
      >
        ПОДРОБНЕЕ
      </Button>
    </div>
  );
}

export default ProductCard;
