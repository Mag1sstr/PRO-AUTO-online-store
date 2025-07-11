import { useLang } from "../../hooks/useLang";
import styles from "./SwitchLanguage.module.scss";

function SwitchLanguage() {
  const { setLang } = useLang();

  return (
    <div className={styles.switch}>
      <p
        onClick={() => {
          localStorage.setItem("lang", "ru");
          setLang("ru");
        }}
      >
        рус
      </p>
      <span></span>
      <p
        onClick={() => {
          localStorage.setItem("lang", "en");
          setLang("en");
        }}
      >
        eng
      </p>
    </div>
  );
}

export default SwitchLanguage;
