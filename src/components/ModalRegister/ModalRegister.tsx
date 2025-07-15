import styles from "./ModalRegister.module.scss";
import { useLang } from "../../hooks/useLang";
import { useModals } from "../../hooks/useModals";
import ModalTop from "../ModalTop/ModalTop";
import ModalWrapper from "../ModalWrapper/ModalWrapper";
import userImg from "../../assets/icons/user.png";
import ModalInput from "../ModalInput/ModalInput";
import Button from "../Button/Button";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useLoginUserMutation, useRegisterUserMutation } from "../../api/api";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";
import { useAppDispatch } from "../../store/store";
import { setToken } from "../../store/slices/authSlice";

interface Inputs {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

function ModalRegister() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>({ mode: "onChange" });

  const { openRegModal, setOpenRegModal, setOpenLoginModal } = useModals();
  const { t, lang } = useLang();
  const [
    registerUser,
    { isSuccess: isRegSuccess, isError: isRegError, isLoading },
  ] = useRegisterUserMutation();

  const [loginUser, { isSuccess: isLoginSuccess, data: loginData }] =
    useLoginUserMutation();

  const submit: SubmitHandler<Inputs> = (data) => {
    registerUser(data);
  };

  useEffect(() => {
    if (isRegError) {
      toast.error(t[lang].toast.inc_data);
    }
  }, [isRegError]);

  useEffect(() => {
    if (isRegSuccess) {
      toast.success(t[lang].toast.reg);
      loginUser({ email: getValues("email"), password: getValues("password") });
      setOpenRegModal(false);
    }
  }, [isRegSuccess]);

  useEffect(() => {
    if (isLoginSuccess && loginData.access_token) {
      dispatch(setToken(loginData.access_token));
    }
  }, [isLoginSuccess]);

  return (
    <ModalWrapper open={openRegModal} setOpen={setOpenRegModal}>
      <ModalTop
        title={t[lang].modals.reg.title}
        text={t[lang].modals.reg.text}
        setOpen={setOpenRegModal}
        image={userImg}
      />

      {isLoading && <Spinner />}
      <form onSubmit={handleSubmit(submit)}>
        <div className={styles.main}>
          <div>
            <ModalInput
              title={t[lang].modals.name}
              register={register("first_name", {
                required: t[lang].errors.req,
              })}
              error={errors.first_name?.message}
            />
            <ModalInput
              title={t[lang].modals.surname}
              register={register("last_name", {
                required: t[lang].errors.req,
              })}
              error={errors.last_name?.message}
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
              title={t[lang].modals.password}
              register={register("password", {
                required: t[lang].errors.req,
              })}
              type="password"
              password
              error={errors.password?.message}
            />
          </div>
          <div className={styles.buttons}>
            <p
              onClick={() => {
                setOpenLoginModal(true);
                setOpenRegModal(false);
              }}
            >
              {t[lang].modals.reg.sec_btn}
            </p>
            <Button type="submit" fontSize={12} red>
              {t[lang].modals.reg.btn}
            </Button>
          </div>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default ModalRegister;
