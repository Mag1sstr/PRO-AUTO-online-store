import styles from "./Spinner.module.scss";

function Spinner() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Spinner;
