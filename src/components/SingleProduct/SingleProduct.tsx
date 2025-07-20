import styles from "./SingleProduct.module.scss";
import img1 from "../../assets/single-product/01.png";
import img2 from "../../assets/single-product/02.jpg";
import img3 from "../../assets/single-product/03.jpg";
import img4 from "../../assets/single-product/04.jpg";
import { useState } from "react";

function SingleProduct() {
  const [currImage, setCurrImage] = useState(0);
  const images = [img1, img2, img3, img4];

  const handleNextImage = () => {
    setCurrImage((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const handlePrevImage = () => {
    setCurrImage((prev) => (prev > 0 ? prev - 1 : prev));
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.product}>
        <div className={styles.product__row}>
          <div className={styles.image}>
            {images.map((image, i) => (
              <img
                key={image}
                className={currImage === i ? styles.active : ""}
                src={image}
                alt="image"
              />
            ))}
          </div>
          <div className={styles.info}>
            <h3 className={styles.title}>MAGNUM 60Ah</h3>
            <p className={styles.available}>В НАЛИЧИИ</p>
            <ul className={styles.details}>
              <li>
                <p className={styles.item}>
                  Емкость, Ач: <span>60</span>
                </p>
              </li>
              <li>
                <p className={styles.item}>
                  Емкость, Ач: <span>60</span>
                </p>
              </li>
              <li>
                <p className={styles.item}>
                  Емкость, Ач: <span>60</span>
                </p>
              </li>
            </ul>
            <p className={styles.price}>2199 руб.</p>
            <p className={styles.desc}>
              Цена действительна при сдаче старого аккумулятора аналогичной
              емкости в лом
            </p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.switch}>
            <button onClick={handlePrevImage}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-2"
                  y="2"
                  width="36"
                  height="36"
                  transform="matrix(-1 0 0 1 36 0)"
                  stroke="#C53720"
                  strokeWidth="4"
                />
                <path
                  d="M15.3845 9.23077L24.6152 20L15.3845 30.7692"
                  stroke="#C53720"
                  strokeWidth="4"
                />
              </svg>
            </button>
            <button onClick={handleNextImage}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="-2"
                  y="2"
                  width="36"
                  height="36"
                  transform="matrix(-1 0 0 1 36 0)"
                  stroke="#C53720"
                  strokeWidth="4"
                />
                <path
                  d="M15.3845 9.23077L24.6152 20L15.3845 30.7692"
                  stroke="#C53720"
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
