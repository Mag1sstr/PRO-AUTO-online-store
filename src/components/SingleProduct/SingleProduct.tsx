import styles from "./SingleProduct.module.scss";
import img1 from "../../assets/single-product/01.png";
import img2 from "../../assets/single-product/02.jpg";
import img3 from "../../assets/single-product/03.jpg";
import img4 from "../../assets/single-product/04.jpg";
import { useState } from "react";
import { useGetSingleProductQuery } from "../../api/api";
import { useParams } from "react-router-dom";
import { useLang } from "../../hooks/useLang";
import { formatPrice } from "../../utils/formatPrice";
import Spinner from "../Spinner/Spinner";

function SingleProduct() {
  const { id } = useParams();
  const { data, isFetching } = useGetSingleProductQuery(id!);

  const [currImage, setCurrImage] = useState(0);
  const images = [img1, img2, img3, img4];

  const handleNextImage = () => {
    setCurrImage((prev) => (prev < images.length - 1 ? prev + 1 : prev));
  };

  const handlePrevImage = () => {
    setCurrImage((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const { t, lang } = useLang();

  console.log(data);

  return (
    <section className={styles.wrapper}>
      {isFetching && <Spinner />}
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
            <h3 className={styles.title}>{data?.name}</h3>
            {data?.available === 1 ? (
              <p className={styles.available}>{t[lang].filters.available}</p>
            ) : (
              <p className={`${styles.available} ${styles.not}`}>
                {t[lang].filters.not_available}
              </p>
            )}
            <ul className={styles.details}>
              <li>
                <p className={styles.item}>
                  {t[lang].filters.brand}: <span>{data?.brand.name}</span>
                </p>
              </li>
              <li>
                <p className={styles.item}>
                  {t[lang].filters.model}: <span>{data?.model.name}</span>
                </p>
              </li>
              <li>
                <p className={styles.item}>
                  {t[lang].filters.gen}: <span>{data?.generation.name}</span>
                </p>
              </li>
            </ul>
            {data && (
              <p className={styles.price}>{formatPrice(data.price)} тг.</p>
            )}
            <p className={styles.desc}>{data?.description}</p>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.switch}>
            <button onClick={handlePrevImage} disabled={currImage === 0}>
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
            <button
              onClick={handleNextImage}
              disabled={currImage === images.length - 1}
            >
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
