import styles from "./Advantages.module.scss";
import cartImg1 from "../../assets/advantages/01.svg";
import cartImg2 from "../../assets/advantages/02.svg";
import cartImg3 from "../../assets/advantages/03.svg";
import cartImg4 from "../../assets/advantages/04.svg";
import { useLang } from "../../hooks/useLang";

function Advantages() {
  const { t, lang } = useLang();

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.col}>
              <img src={cartImg1} alt="" />
              <p>{t[lang].advantages.ad1}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.col}>
              <img src={cartImg2} alt="" />
              <p>{t[lang].advantages.ad2}</p>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.col}>
              <img src={cartImg3} alt="" />
              <p>{t[lang].advantages.ad3}</p>
              <svg
                width="51"
                height="20"
                viewBox="0 0 51 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.col}>
              <img src={cartImg4} alt="" />
              <p>{t[lang].advantages.ad4}</p>
              <svg
                width="51"
                height="20"
                viewBox="0 0 51 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M43.6709 11.9991L0 11.9991V7.99912L43.6695 7.99912L38.7583 2.72627L41.6853 0L49.7297 8.63673L50.9993 9.99987L49.7297 11.363L41.6853 19.9997L38.7583 17.2735L43.6709 11.9991Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
