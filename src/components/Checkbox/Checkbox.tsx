import styles from "./Checkbox.module.scss";

interface IProps {
  check: boolean;
  setCheck: (check: boolean) => void;
}
function Checkbox({ check, setCheck }: IProps) {
  const handleClick = () => {
    setCheck(!check);
  };
  return (
    <div
      onClick={handleClick}
      className={`${styles.checkbox} ${check && styles.active}`}
    ></div>
  );
}

export default Checkbox;
