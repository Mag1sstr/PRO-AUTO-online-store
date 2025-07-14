import styles from "./ModalInput.module.scss";

interface IProps {
  title: string;
}

function ModalInput({ title }: IProps) {
  return (
    <div className={styles.field}>
      <p>{title}:</p>
      <input type="text" />
    </div>
  );
}

export default ModalInput;
