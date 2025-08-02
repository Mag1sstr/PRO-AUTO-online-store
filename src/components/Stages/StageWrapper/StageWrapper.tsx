import styles from "./StageWrapper.module.scss";

interface IProps {
  children: React.ReactNode;
}
function StageWrapper({ children }: IProps) {
  return <section className={styles.wrapper}>{children}</section>;
}

export default StageWrapper;
