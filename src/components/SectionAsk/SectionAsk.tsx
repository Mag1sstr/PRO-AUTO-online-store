import { useLang } from "../../hooks/useLang";
import { sendToTelegram } from "../../utils/sendToTelegram";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import SectionAskInput from "../SectionAskInput/SectionAskInput";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionAsk.module.scss";
import { useForm, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

interface IFields {
  name: string;
  tel: string;
  email: string;
  message: string;
}

function SectionAsk() {
  const { register, handleSubmit } = useForm<IFields>({
    mode: "onChange",
  });
  const { t, lang } = useLang();

  const submit: SubmitHandler<IFields> = (data) => {
    if (Object.values(data).every((el) => el.length > 0)) {
      sendToTelegram(data).then(() => toast.success("Вопрос отправлен!"));
    } else {
      toast.error("Заполните все поля!");
    }
  };
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <SectionTitle color="white">ЗАДАТЬ ВОПРОС</SectionTitle>
        <div className={styles.text}>
          <p>
            Менеджеры компании с радостью ответят на ваши вопросы и помогут с
            выбором нужной продукции.
          </p>
        </div>

        <form className={styles.col} onSubmit={handleSubmit(submit)}>
          <SectionAskInput
            name={t[lang].modals.name}
            register={register("name")}
          />
          <SectionAskInput
            name={t[lang].modals.tel}
            register={register("tel")}
          />
          <SectionAskInput
            name={t[lang].modals.email}
            register={register("email")}
          />
          <SectionAskInput
            name={t[lang].modals.name}
            textarea
            register={register("message")}
          />

          <div className={styles.check}>
            <Checkbox className={styles.edit} />{" "}
            <p>
              Я согласен на <span>обработку персональных данных</span>
            </p>
          </div>

          <Button type="submit" fontSize={12} end>
            ОТПРАВИТЬ
          </Button>
        </form>
      </div>
    </section>
  );
}

export default SectionAsk;
