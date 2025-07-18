import { useState } from "react";
import type { IItems } from "../../types/interfaces";
import styles from "./FilterSelect.module.scss";

interface IProps {
  title: string;
  data: IItems[];
}

function FilterSelect({ title, data }: IProps) {
  const [open, setOpen] = useState(false);

  const handleDrop = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleDrop}
      className={`${styles.select} ${open && styles.open}`}
    >
      <div className={styles.item}>
        <p>{title}</p>
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
        {/* {data.map} */}
        <div className={styles.select__item}>
          <p>MAGNUM 60Ah</p>
        </div>
        <div className={styles.select__item}>
          <p>MAGNUM 60Ah</p>
        </div>
      </div>
    </div>
  );
}

export default FilterSelect;
