import type { UseFormRegisterReturn } from "react-hook-form";
import styles from "./SectionAskInput.module.scss";

interface IProps {
  name: string;
  textarea?: boolean;
  register?: UseFormRegisterReturn;
}

function SectionAskInput({ name, textarea, register }: IProps) {
  return (
    <div className={styles.field}>
      <p>{name}:</p>
      {textarea ? (
        <textarea {...register}></textarea>
      ) : (
        <input type="text" {...register} />
      )}
    </div>
  );
}

export default SectionAskInput;
