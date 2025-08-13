import styles from "./SectionAskInput.module.scss";

interface IProps {
  name: string;
  textarea?: boolean;
}

function SectionAskInput({ name, textarea }: IProps) {
  return (
    <div className={styles.field}>
      <p>{name}:</p>
      {textarea ? <textarea></textarea> : <input type="text" />}
    </div>
  );
}

export default SectionAskInput;
