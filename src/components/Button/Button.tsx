import styles from "./Button.module.scss";

interface IProps {
  children: React.ReactNode;
  width: number | string;
  height: number | string;
  start?: boolean;
  end?: boolean;
  center?: boolean;
  onClick?: () => void;
  color?: string;
  borderColor?: string;
  fontSize?: string | number;
  red?: boolean;
}

function Button({
  children,
  width,
  height,
  onClick,
  borderColor,
  start,
  center,
  end,
  fontSize = 14,
  red,
}: IProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: center
          ? "center"
          : start
          ? "start"
          : end
          ? "end"
          : "start",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width,
          height,
          fontSize,
          color: red ? "#C53720" : "#fff",
          borderColor,
        }}
        className={styles.btn}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
