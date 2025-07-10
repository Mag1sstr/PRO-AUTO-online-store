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
}

function Button({
  children,
  width,
  height,
  onClick,
  color = "#fff",
  borderColor,
  start,
  center,
  end,
  fontSize = 14,
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
        style={{ width, height, fontSize, color, borderColor }}
        className={styles.btn}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
