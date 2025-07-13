import styles from "./ModalWrapper.module.scss";

interface IProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
  children: React.ReactNode;
}

function ModalWrapper({ open, setOpen, children }: IProps) {
  return (
    <section
      onClick={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </section>
  );
}

export default ModalWrapper;
