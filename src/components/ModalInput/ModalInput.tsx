import type { UseFormRegisterReturn } from "react-hook-form";
import styles from "./ModalInput.module.scss";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

interface IProps {
  title: string;
  register?: UseFormRegisterReturn;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  password?: boolean;
}

function ModalInput({
  title,
  register,
  error,
  type = "text",
  password,
}: IProps) {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={`${styles.field} ${error && styles.field__err}`}>
      <p className={styles.err}>{error}</p>
      <p>{title}:</p>
      <input type={showPass ? "text" : type} {...register} />
      {password &&
        (showPass ? (
          <FaEye
            size={22}
            className={styles.icon}
            onClick={() => setShowPass((prev) => !prev)}
          />
        ) : (
          <FaEyeSlash
            size={22}
            className={styles.icon}
            onClick={() => setShowPass((prev) => !prev)}
          />
        ))}
    </div>
  );
}

export default ModalInput;
