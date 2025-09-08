import styles from "./ModalAsk.module.scss";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import icon from "../../assets/icons/phone.svg";
import ModalInput from "../ModalInput/ModalInput";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { useLang } from "../../hooks/useLang";
import { useForm, type SubmitHandler } from "react-hook-form";
import { sendToTelegram } from "../../utils/sendToTelegram";
import { toast } from "react-toastify";
import { useState } from "react";
import successIcon from "../../assets/icons/success.png";

interface IFields {
  name: string;
  email: string;
  tel: string;
  message: string;
}

function ModalAsk() {
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFields>({ mode: "onChange" });
  const { openAskModal, setOpenAskModal } = useModals();
  const { t, lang } = useLang();

  const submit: SubmitHandler<IFields> = (data) => {
    sendToTelegram(data).then(() => {
      toast.success("Вопрос отправлен!");
      setIsSuccess(true);
    });
  };
  console.log(isSuccess);

  return (
    <ModalWrapper
      open={openAskModal}
      setOpen={setOpenAskModal}
      success={isSuccess}
      modalStyles={`${styles.modal}`}
    >
      <div
        className={`${styles.success__banner} ${isSuccess && styles.active}`}
      >
        <button className={styles.close} onClick={() => setOpenAskModal(false)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4L16 16" stroke="white" strokeWidth="4" />
            <path d="M16 4L4 16" stroke="white" strokeWidth="4" />
          </svg>
        </button>
        <div className={styles.image}>
          <img src={successIcon} alt="icon" />
        </div>
        <p>ВАШЕ ПИСЬМО УСПЕШНО ОТПРАВЛЕНО!</p>
      </div>
      <ModalTop
        text="Менеджеры компании с радостью ответят на ваши вопросы и помогут с выбором продукции."
        setOpen={setOpenAskModal}
        image={icon}
        title="Задать вопрос"
      />
      <form className={styles.content} onSubmit={handleSubmit(submit)}>
        <ModalInput
          title={t[lang].modals.name}
          register={register("name", {
            required: t[lang].errors.req,
          })}
          error={errors.name?.message}
        />
        <ModalInput
          title={t[lang].modals.tel}
          register={register("tel", {
            required: t[lang].errors.req,
            pattern: {
              value: /^((\+7|7|8)+([0-9]){10})$/,
              message: t[lang].errors.phone,
            },
          })}
          error={errors.tel?.message}
        />
        <ModalInput
          title={t[lang].modals.email}
          register={register("email", {
            required: t[lang].errors.req,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: t[lang].errors.email,
            },
          })}
          error={errors.email?.message}
        />
        <ModalInput
          title={t[lang].modals.message}
          register={register("message", {
            required: t[lang].errors.req,
          })}
          error={errors.message?.message}
        />

        <div className={styles.check}>
          <Checkbox />
          <p>
            Я согласен на <span>обработку персональных данных</span>
          </p>
        </div>
        <Button type="submit" end red fontSize={12}>
          ОТПРАВИТЬ
        </Button>
      </form>
    </ModalWrapper>
  );
}

export default ModalAsk;
