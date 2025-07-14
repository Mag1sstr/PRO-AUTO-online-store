import styles from "./ModalWrapper.module.scss";

interface IProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
  children: React.ReactNode;
}

function ModalWrapper({ open, setOpen, children }: IProps) {
  return (
    <section
      onMouseDown={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open}`}
    >
      <div onMouseDown={(e) => e.stopPropagation()} className={styles.modal}>
        {children}
      </div>
    </section>
  );
}

export default ModalWrapper;
