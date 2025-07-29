import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Search.module.scss";
function Search() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <section className={styles.search}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.field}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M24 18C24 21.3137 21.3137 24 18 24C14.6863 24 12 21.3137 12 18C12 14.6863 14.6863 12 18 12C21.3137 12 24 14.6863 24 18ZM22.8941 26.7226C21.4474 27.536 19.7779 28 18 28C12.4772 28 8 23.5228 8 18C8 12.4772 12.4772 8 18 8C23.5228 8 28 12.4772 28 18C28 20.2954 27.2266 22.4101 25.9263 24.0979L33.4142 31.5858L30.5858 34.4142L22.8941 26.7226Z"
                  fill="#A5A5A5"
                />
              </g>
            </svg>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <Button height={40} className={styles.find} fontSize={12}>
            Найти
          </Button>
          <button className={styles.close}>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4L16 16" stroke="#A5A5A5" strokeWidth="4" />
              <path d="M16 4L4 16" stroke="#A5A5A5" strokeWidth="4" />
            </svg>
          </button>
        </div>
        <ul
          className={`${styles.col} ${
            !!searchValue.trim().length && styles.drop
          }`}
        >
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
          <li>111111111111</li>
        </ul>
      </div>
    </section>
  );
}

export default Search;
