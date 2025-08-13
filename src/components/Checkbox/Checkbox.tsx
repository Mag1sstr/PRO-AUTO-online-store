import styles from "./Checkbox.module.scss";

interface IProps {
  check: boolean;
  setCheck: (check: boolean) => void;
  className?: string;
}
function Checkbox({ check, setCheck, className }: IProps) {
  const handleClick = () => {
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
