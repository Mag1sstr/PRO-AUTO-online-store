import Button from "../Button/Button";
import styles from "./Banner.module.scss";

interface IProps {
  image: string;
  title: string;
  active: boolean;
}

function Banner({ image, title, active }: IProps) {
  return (
    <section
      className={`${styles.banner} ${active && styles.active}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            <h1 className={styles.title}>{title}</h1>
            <Button width={216} height={52}>
              ПЕРЕЙТИ В КАТАЛОГ
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
