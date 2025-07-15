import styles from "./Products.module.scss";
import prodImg from "../../assets/products/product.png";
import Button from "../Button/Button";
function Products() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.sidebar}></div>
          <div className={styles.products}>
            <div className={styles.card}>
              <div className={styles.image__wrapper}>
                <img src={prodImg} alt="image" />
              </div>
              <h3>MAGNUM 60Ah</h3>
              <p className={styles.price}>2199 руб.</p>
              <p className={styles.desc}>
                Цена действительна при сдаче старого аккумулятора аналогичной
                емкости в лом
              </p>
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
                </div>
              </div>
              <Button width="100%" height={40} red>
                ПОДРОБНЕЕ
              </Button>
            </div>
            <div className={styles.card}>
              <div className={styles.image__wrapper}>
                <img src={prodImg} alt="image" />
              </div>
              <h3>MAGNUM 60Ah</h3>
              <p className={styles.price}>2199 руб.</p>
              <p className={styles.desc}>
                Цена действительна при сдаче старого аккумулятора аналогичной
                емкости в лом
              </p>
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
                </div>
              </div>
              <Button width="100%" height={40} red>
                ПОДРОБНЕЕ
              </Button>
            </div>
            <div className={styles.card}>
              <div className={styles.available}>в наличии</div>
              <div className={styles.image__wrapper}>
                <img src={prodImg} alt="image" />
              </div>
              <h3>MAGNUM 60Ah</h3>
              <p className={styles.price}>2199 руб.</p>
              <p className={styles.desc}>
                Цена действительна при сдаче старого аккумулятора аналогичной
                емкости в лом
              </p>
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
                </div>
              </div>
              <Button width="100%" height={40} red>
                ПОДРОБНЕЕ
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
