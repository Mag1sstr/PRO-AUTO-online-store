import styles from "./FAQItem.module.scss";

interface IProps {
  onClick: () => void;
  isActive: boolean;
  title: string;
  content: string;
}
function FAQItem({ onClick, isActive, title, content }: IProps) {
  return (
    <div
      onClick={onClick}
      className={`${styles.details} ${isActive && styles.drop}`}
    >
      <div className={styles.icon}>
        <svg
          width="56"
          height="56"
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="28" cy="28" r="22.5" stroke="white" strokeWidth="4" />
          <path d="M28 17.5L28 38.5" stroke="white" strokeWidth="4" />
          <path d="M38.5 28H17.5" stroke="white" strokeWidth="4" />
        </svg>
      </div>
      <p className={styles.details__title}>{title}</p>

      <div className={styles.details__content}>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default FAQItem;
