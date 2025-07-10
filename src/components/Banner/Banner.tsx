import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import styles from "./Banner.module.scss";
import { ROUTES } from "../../routes/routes";

interface IProps {
  image: string;
  title: string;
  active: boolean;
  notFound?: boolean;
}

function Banner({ image, title, active, notFound = false }: IProps) {
  const navigate = useNavigate();

  return (
    <section
      className={`${styles.banner} ${active && styles.active}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            {notFound && (
              <svg
                className={styles.notfound}
                width="268"
                height="106"
                viewBox="0 0 268 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M133.91 2C147.031 2.00015 157.57 8.04151 164.774 17.4648C171.948 26.8484 175.8 39.5467 175.8 53C175.8 66.5191 171.948 79.2184 164.772 88.5869C157.566 97.9955 147.027 104 133.91 104C120.857 104 110.351 97.9924 103.163 88.585C96.0059 79.2173 92.1543 66.519 92.1543 53C92.1543 39.5467 96.0068 26.8495 103.162 17.4668C110.347 8.04476 120.853 2 133.91 2ZM69.6895 3.75488V60.8535H84.4287V77.543H69.6895V102.245H51.085V77.543H2V63.4756L2.46875 62.918L51.5537 4.46875L52.1533 3.75488H69.6895ZM251.261 3.75488V60.8535H266V77.543H251.261V102.245H232.657V77.543H183.571V63.4756L184.04 62.918L233.125 4.46875L233.725 3.75488H251.261ZM133.91 19.9033C127.131 19.9033 121.48 23.4398 117.445 29.3867C113.388 35.3671 111.029 43.7278 111.029 53C111.029 62.2722 113.388 70.6329 117.445 76.6133C121.48 82.5602 127.131 86.0967 133.91 86.0967C140.763 86.0965 146.447 82.5538 150.495 76.6104C154.567 70.6314 156.926 62.2722 156.926 53C156.926 43.7278 154.567 35.3686 150.495 29.3896C146.447 23.4462 140.763 19.9035 133.91 19.9033ZM206.785 60.8535H232.657V30.251L206.785 60.8535ZM25.2129 60.8535H51.085V30.251L25.2129 60.8535Z"
                  stroke="#C53720"
                  strokeWidth="4"
                />
              </svg>
            )}
            <h1 className={styles.title}>{title}</h1>
            {notFound ? (
              <Button
                onClick={() => navigate(ROUTES.HOME)}
                width={216}
                height={52}
              >
                ПЕРЕЙТИ НА ГЛАВНУЮ
              </Button>
            ) : (
              <Button width={216} height={52}>
                ПЕРЕЙТИ В КАТАЛОГ
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
