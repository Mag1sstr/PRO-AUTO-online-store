import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import styles from "./Company.module.scss";
function Company() {
  const { t, lang } = useLang();

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.center}>
            <h2 className={styles.title}>{t[lang].company.title}</h2>
          </div>
          <div className={styles.row}>
            <div className={styles.image__wrapper} data-aos="fade-right">
              <div className={styles.image}></div>
            </div>
            <div className={styles.content} data-aos="fade-up">
              <p>{t[lang].company.text}</p>
              <Button width={216} height={52}>
                {t[lang].company.btn}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
