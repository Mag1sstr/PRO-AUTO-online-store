import styles from "./Checkbox.module.scss";

interface IProps {
  check: boolean;
  setCheck?: (check: boolean) => void;
  className?: string;
  onClick?: () => void;
}
function Checkbox({ check, setCheck, className, onClick }: IProps) {
  const handleClick = () => {
    onClick!();
    setCheck!(!check);
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.checkbox} ${check && styles.active} ${className}`}
    ></div>
  );
}

export default Checkbox;
