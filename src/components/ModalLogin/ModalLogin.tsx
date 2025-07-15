import styles from "./ModalLogin.module.scss";
import userImg from "../../assets/icons/user.png";
import Button from "../Button/Button";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import { useLang } from "../../hooks/useLang";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import ModalInput from "../ModalInput/ModalInput";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLoginUserMutation } from "../../api/api";
import Spinner from "../Spinner/Spinner";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAppDispatch } from "../../store/store";
import { setToken } from "../../store/slices/authSlice";

interface ILoginInputs {
  email: string;
  password: string;
}

function ModalLogin() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginInputs>({
    mode: "onChange",
  });

  const { openLoginModal, setOpenLoginModal, setOpenRegModal } = useModals();
  const { t, lang } = useLang();

  const [
    loginUser,
    {
      data: loginData,
      isLoading,
      isError: isLoginError,
      isSuccess: isLoginSuccess,
    },
  ] = useLoginUserMutation();

  const submit: SubmitHandler<ILoginInputs> = (data) => {
    loginUser(data);
  };

  useEffect(() => {
    if (isLoginError) {
      toast.error(t[lang].toast.inc_data);
    }
  }, [isLoginError]);

  useEffect(() => {
    if (isLoginSuccess && loginData.access_token) {
      setOpenLoginModal(false);
      dispatch(setToken(loginData.access_token));
    }
  }, [isLoginSuccess]);

  console.log(loginData);

  return (
    <ModalWrapper open={openLoginModal} setOpen={setOpenLoginModal}>
      <ModalTop
        title={t[lang].modals.login.title}
        text={t[lang].modals.login.text}
        image={userImg}
        setOpen={setOpenLoginModal}
      />

      {isLoading && <Spinner />}
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
              type={"password"}
              password
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
