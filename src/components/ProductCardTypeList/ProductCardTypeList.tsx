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
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardTypeList;
