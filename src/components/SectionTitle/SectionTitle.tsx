import styles from "./SectionTitle.module.scss";

interface IProps {
  children: React.ReactNode;
  color?: "white" | "black";
}
function SectionTitle({ children, color = "black" }: IProps) {
  return (
    <div className={styles.center}>
      <h2
        className={styles.title}
        style={{ color: color === "black" ? "#1D1D1D" : color }}
      >
        {children}
      </h2>
    </div>
  );
}

export default SectionTitle;
