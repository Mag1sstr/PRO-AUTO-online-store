import { useState } from "react";
import styles from "./Checkbox.module.scss";

interface IProps {
  className?: string;
  onClick?: () => void;
}
function Checkbox({ className, onClick }: IProps) {
  const [check, setCheck] = useState(false);
  const handleClick = () => {
    onClick!();
    setCheck(!check);
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.checkbox} ${check && styles.active} ${className}`}
    ></div>
  );
}

export default Checkbox;
