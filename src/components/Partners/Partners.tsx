import styles from "./Partners.module.scss";

function Partners() {
  return (
    <section className={styles.partners}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.card}>
            <div className={styles.image__wrapper}>
              <img src="" alt="" />
            </div>
            <div className={styles.footer}>
              <p>Компания «ПартКом»</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
