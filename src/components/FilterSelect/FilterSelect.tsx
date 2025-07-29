import { useEffect, useState } from "react";
import type { IItems } from "../../types/interfaces";
import styles from "./FilterSelect.module.scss";

interface IProps {
  title: string;
  data: IItems[];
  allBtnText: string;
  onChange: (id: number) => void;
}

function FilterSelect({ title, data, allBtnText, onChange }: IProps) {
  const [allText, setAllText] = useState(allBtnText);
  const [open, setOpen] = useState(false);
  const [selectTitle, setSelectTitle] = useState(title);

  const handleDrop = () => {
    if (!data.length) {
      return;
    }
    setOpen((prev) => !prev);
  };

  const handleSelect = (el: IItems) => {
    setSelectTitle(el.name);
    onChange(el.id);
  };

  useEffect(() => {
    setAllText(allBtnText);
    setSelectTitle(title);
  }, [title, data]);

  return (
    <div
      onClick={handleDrop}
      className={`${styles.select}  ${open && styles.open} ${
        !data?.length && styles.disabled
      }`}
    >
      <div className={styles.item}>
        <p>{selectTitle}</p>
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
        {data &&
          [{ id: -1, name: allText }, ...data].map((el) => (
            <div
              onClick={() => handleSelect(el)}
              key={el.id}
              className={styles.select__item}
            >
              <p>{el.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FilterSelect;
