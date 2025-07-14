import type { UseFormRegisterReturn } from "react-hook-form";
import styles from "./ModalInput.module.scss";

interface IProps {
  title: string;
  register?: UseFormRegisterReturn;
  error?: string;
}

function ModalInput({ title, register, error }: IProps) {
  return (
    <div className={`${styles.field} ${error && styles.field__err}`}>
      <p className={styles.err}>{error}</p>
      <p>{title}:</p>
      <input type="text" {...register} />
    </div>
  );
}

export default ModalInput;
