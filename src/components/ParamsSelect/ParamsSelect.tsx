import styles from "./ParamsSelect.module.scss";

function ParamsSelect() {
  return (
    <div className={styles.select}>
      <div className={styles.title}>
        ЦЕНА{" "}
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 4L12 10L8 16" stroke="white" strokeWidth="4" />
        </svg>
      </div>
      <div className={styles.select__drop}>
        <div className={styles.content}>
          <div className={styles.range}>
            <div className={styles.range__row}>
              <input type="number" placeholder="от" />
              <input type="number" placeholder="до" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParamsSelect;
