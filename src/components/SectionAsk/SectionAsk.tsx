import { useLang } from "../../hooks/useLang";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import SectionAskInput from "../SectionAskInput/SectionAskInput";
import SectionTitle from "../SectionTitle/SectionTitle";
import styles from "./SectionAsk.module.scss";
import axios from "axios";
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

  const botToken = import.meta.env.VITE_BOT_TOKEN;
  const chatId = import.meta.env.VITE_CHAT_ID;

  const submit: SubmitHandler<IFields> = (data) => {
    if (Object.values(data).every((el) => el.length > 0)) {
      axios
        .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: `
          📩 Вам новая заявка:
          <b>Имя:</b> ${data.name}
          <b>Телефон:</b> ${data.tel}
          <b>Почта:</b> ${data.email}
          <b>Сообщение:</b> ${data.message}
          `,
          parse_mode: "HTML",
        })
        .then((resp) => console.log(resp.data));
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
