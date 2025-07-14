import styles from "./ModalLogin.module.scss";
import userImg from "../../assets/icons/user.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import { useLang } from "../../hooks/useLang";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalInput from "../ModalInput/ModalInput";
import { useForm, type SubmitHandler } from "react-hook-form";

interface ILoginInputs {
  email: string;
  password: string;
}

function ModalLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    mode: "onChange",
  });

  const { openLoginModal, setOpenLoginModal, setOpenRegModal } = useModals();
  const { t, lang } = useLang();

  const submit: SubmitHandler<ILoginInputs> = (data) => {
    // console.log(data);
  };

  console.log(errors);

  return (
    <ModalWrapper open={openLoginModal} setOpen={setOpenLoginModal}>
      <ModalTop
        title={t[lang].modals.login.title}
        text={t[lang].modals.login.text}
        image={userImg}
        setOpen={setOpenLoginModal}
      />
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.main}>
          <div>
            <ModalInput
              title={t[lang].modals.email}
              register={register("email", {
                required: t[lang].errors.req,
              })}
              error={errors.email?.message}
            />
            <ModalInput
              title={t[lang].modals.password}
              register={register("password", { required: t[lang].errors.req })}
              error={errors.password?.message}
            />
          </div>
          <div className={styles.buttons}>
            <p
              onClick={() => {
                setOpenRegModal(true);
                setOpenLoginModal(false);
              }}
            >
              {t[lang].modals.login.sec_btn}
            </p>
            <Button type="submit" minWidth={116} red fontSize={12}>
              {t[lang].modals.login.btn}
            </Button>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalLogin;
