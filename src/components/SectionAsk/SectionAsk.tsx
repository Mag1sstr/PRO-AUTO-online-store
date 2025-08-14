import { useState } from "react";
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
  const { register, handleSubmit, getValues } = useForm<IFields>();
  const { t, lang } = useLang();
  const [check, setCheck] = useState(false);

  const botToken = "8017199839:AAFcar-ypp1puKUT5hCBx4G59l71UNkdu-w";
  const chatId = "747088794";
  const fieldsValues = getValues();
  const message = `
  📩 Вам новая заявка:
  <b>Имя:</b> ${fieldsValues.message}
  <b>Телефон:</b> ${fieldsValues.message}
  <b>Почта:</b> ${fieldsValues.message}
  <b>Сообщение:</b> ${fieldsValues.message}
  `;

  const submit: SubmitHandler<IFields> = (data) => {
    if (Object.values(data).every((el) => el.length > 0)) {
      axios
        .post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: message,
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
            <Checkbox
              check={check}
              setCheck={setCheck}
              className={styles.edit}
            />{" "}
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
