import styles from "./ModalWrapper.module.scss";

interface IProps {
  open: boolean;
  setOpen: (bool: boolean) => void;
  children: React.ReactNode;
  success?: boolean;
  modalStyles?: string;
}

function ModalWrapper({
  open,
  setOpen,
  children,
  success,
  modalStyles,
}: IProps) {
  return (
    <section
      onMouseDown={() => setOpen(false)}
      className={`${styles.wrapper} ${open && styles.open} ${
        success && styles.success
      } `}
    >
      <div
        onMouseDown={(e) => e.stopPropagation()}
        className={`${styles.modal} ${modalStyles}`}
      >
        {children}
      </div>
    </section>
  );
}

export default ModalWrapper;
