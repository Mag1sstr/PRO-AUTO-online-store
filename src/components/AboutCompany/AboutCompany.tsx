import styles from "./AboutCompany.module.scss";

function AboutCompany() {
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.center}>
            <h2 className={styles.title} data-aos="fade-up">
              о компании
            </h2>
          </div>
          <div className={styles.row}>
            <div className={styles.text} data-aos="fade-up">
              Мы рады приветствовать вас на нашем сайте. <br /> <br /> Компания
              «PROавто» - это надежные, качественные аккумуляторы в широком
              ассортименте, разнообразные в по форме и характеристикам, а также
              качественные масла и автохимия именитых брендов. <br /> <br />{" "}
              Сеть магазинов «PROавто» более 20-и лет занимается продажей
              автомобильных аккумуляторов, масел, расходных материалов, химией и
              аксессуаров. Мы зарекомендовали себя как надежная компания,
              специалисты которой всегда готовы проконсультировать по любому
              вопросу: от подбора автощёток, до рекомендаций по подбору
              аккумулятора для Вашего автомобиля. Мы дорожим своей репутацией и
              даём гарантию на весь ассортимент продукции, представленной на
              нашем сайте! <br /> <br /> Убедитесь в этом сами!
            </div>
            <div className={styles.col}>
              <div className={styles.item} data-aos="fade-left">
                <svg
                  width="84"
                  height="112"
                  viewBox="0 0 84 112"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M63.1719 2L82 20.8281V110H2V2H63.1719Z"
                    stroke="white"
                    strokeWidth="4"
                  />
                  <path d="M62 0.5V22H83.5" stroke="white" strokeWidth="4" />
                  <g opacity="0.5">
                    <path d="M16 41L68 41" stroke="white" strokeWidth="4" />
                    <path d="M16 53L68 53" stroke="white" strokeWidth="4" />
                    <path d="M16 89L68 89" stroke="white" strokeWidth="4" />
                    <path d="M16 65H36" stroke="white" strokeWidth="4" />
                    <path d="M16 77H36" stroke="white" strokeWidth="4" />
                    <path d="M48 65L68 65" stroke="white" strokeWidth="4" />
                    <path d="M48 77L68 77" stroke="white" strokeWidth="4" />
                  </g>
                </svg>
                <p>Реквизиты</p>
              </div>
              <div className={styles.item} data-aos="fade-left">
                <svg
                  width="94"
                  height="86"
                  viewBox="0 0 94 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M82 12V72H53.1719L52.5859 72.5859L42.0303 83.1406L31.9443 72.6162L31.3535 72H2V12H82Z"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                  <path
                    opacity="0.5"
                    d="M8 2H92V66"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                  <circle
                    opacity="0.5"
                    cx="42"
                    cy="42"
                    r="16"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                  <path
                    d="M35 42L41 47L53 37"
                    stroke="#C53720"
                    strokeWidth="4"
                  />
                </svg>
                <p>Задать вопрос</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
