import styles from "./ProductCardTypeList.module.scss";
import type { IProductData } from "../../types/interfaces";
import prodImg from "../../assets/products/product.png";
import { useLang } from "../../hooks/useLang";

function ProductCardTypeList(el: IProductData) {
  const { t, lang } = useLang();
  return (
    <div
      className={`${styles.card} ${
        el.available === 0 && styles.not__available
      }`}
    >
      <div className={styles.available}>{t[lang].filters.available}</div>
      <div className={styles.row}>
        <div className={styles.image__wrapper}>
          <img src={prodImg} alt="image" />
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <p className={styles.title}>{el.name}</p>
            <p className={styles.desc}></p>
          </div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardTypeList;
