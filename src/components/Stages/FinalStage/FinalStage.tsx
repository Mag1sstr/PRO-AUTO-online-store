import styles from "./FinalStage.module.scss";
import Spinner from "../../Spinner/Spinner";
import img from "../../../assets/cart/final-stage.png";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/routes";

interface IProps {
  createOrderLoading: boolean;
  orderNumber: number | null;
}

function FinalStage({ createOrderLoading, orderNumber }: IProps) {
  const navigate = useNavigate();

  if (createOrderLoading) {
    return <Spinner />;
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.row}>
        <img src={img} alt="icon" />
        <div className={styles.content}>
          <h3 className={styles.title}>
            Ваш заказ №{orderNumber} успешно оформлен
          </h3>

          <p className={styles.text}>
            Благодарим за выбор нашей компании. В ближайшее время наши менеджеры
            свяжуться с вами, ответят на любые вопросы и подготовят счет на
            оплату.
          </p>

          <div className={styles.links}>
            <Button
              className={styles.catalog}
              red
              fontSize={12}
              width={128}
              padding="12px 0"
              onClick={() => navigate(ROUTES.CATALOG)}
            >
              В КАТАЛОГ
            </Button>
            <Button
              className={styles.home}
              fontSize={12}
              width={128}
              onClick={() => navigate(ROUTES.HOME)}
            >
              НА ГЛАВНУЮ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalStage;
