import styles from "./ButtonArrow.module.scss";

interface IProps {
  disabled?: boolean;
  onClick?: () => void;
  rotate?: boolean;
}
function ButtonArrow({ onClick, disabled, rotate }: IProps) {
  return (
    <button
      onClick={onClick}
      className={styles.btn}
      disabled={disabled}
      style={{ transform: rotate ? "rotate(180deg)" : "" }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-2"
          y="2"
          width="36"
          height="36"
          transform="matrix(-1 0 0 1 36 0)"
          stroke="#C53720"
          strokeWidth="4"
        />
        <path
          d="M15.3845 9.23077L24.6152 20L15.3845 30.7692"
          stroke="#C53720"
          strokeWidth="4"
        />
      </svg>
    </button>
  );
}

export default ButtonArrow;
