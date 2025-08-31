import axios from "axios";

interface IParams {
  name: string;
  tel: string;
  email: string;
  message: string;
}

export function sendToTelegram(data: IParams) {
  const botToken = import.meta.env.VITE_BOT_TOKEN;
  const chatId = import.meta.env.VITE_CHAT_ID;

  return axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    chat_id: chatId,
    text: `
          📩 Вам новая заявка:
          <b>Имя:</b> ${data.name}
          <b>Телефон:</b> ${data.tel}
          <b>Почта:</b> ${data.email}
          <b>Сообщение:</b> ${data.message}
          `,
    parse_mode: "HTML",
  });
}
