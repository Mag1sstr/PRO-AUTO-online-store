import { useState } from "react";
import styles from "./ParamsSelect.module.scss";

interface IProps {
  title: string;
  children: React.ReactNode;
}

function ParamsSelect({ title, children }: IProps) {
  const [active, setActive] = useState(true);

  const handleOpenSelect = () => {
    setActive((prev) => !prev);
  };
  return (
    <div
      onClick={handleOpenSelect}
      className={`${styles.select} ${active && styles.active}`}
    >
      <div className={styles.title}>
        {title}
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
      <div onClick={(e) => e.stopPropagation()} className={styles.select__drop}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default ParamsSelect;
