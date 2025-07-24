import styles from "./ModalTop.module.scss";

interface IProps {
  image?: string;
  title: string;
  text: string;
  setOpen: (bool: boolean) => void;
  icon?: React.ReactNode;
}

function ModalTop({ image, text, title, setOpen, icon }: IProps) {
  return (
    <div className={styles.top}>
      <div className={styles.icon}>
        {image && <img src={image} alt="icon" />}
        <div className={styles.icon__component}>{icon}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>{title}</div>
        <p className={styles.text}>{text}</p>
      </div>
      <svg
        className={styles.close}
        onClick={() => setOpen(false)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M4 4L16 16" stroke="white" strokeWidth="4" />
        <path d="M16 4L4 16" stroke="white" strokeWidth="4" />
      </svg>
    </div>
  );
}

export default ModalTop;
