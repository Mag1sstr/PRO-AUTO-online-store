import styles from "./License.module.scss";
import licenseImg from "../../assets/license/license.png";

const licenseData = [
  { id: Math.random(), title: "Официальный дистрибьютор материалов марки ELF" },
  {
    id: Math.random(),
    title: "Официальный дистрибьютор материалов марки ШЕЛЛ",
  },
  { id: Math.random(), title: "Официальный партнер Castrol" },
  {
    id: Math.random(),
    title: "Официальный дистрибьютор материалов марки Mobil",
  },
  {
    id: Math.random(),
    title: "Официальный дистрибьютор материалов марки LIQUI MOLY",
  },
  {
    id: Math.random(),
    title: "Официальный дистрибьютор материалов марки Motul",
  },
];
function License() {
  return (
    <section className={styles.license}>
      <div className="container">
        <div className={styles.center}>
          <h2 className={styles.title}>ЛИЦЕНЗИИ</h2>
        </div>
        <div className={styles.row}>
          {licenseData.map((el) => (
            <div key={el.id} className={styles.card__wrapper}>
              <div className={styles.card}>
                <div className={styles.image__wrapper}>
                  <img src={licenseImg} alt="license" />
                  <svg
                    width="174"
                    height="240"
                    viewBox="0 0 174 240"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M78.6957 212H2V2H170V203.098"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path
                      opacity="0.5"
                      d="M152 143.268V18H20V194H89.8425"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <circle
                      cx="129.5"
                      cy="177.5"
                      r="27.5"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path
                      opacity="0.5"
                      d="M144 178C144 170.268 137.732 164 130 164"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path
                      d="M101.477 202.247L89.6133 222.778L104.04 224.256L112.534 236L129.977 205.814"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path
                      d="M151.5 193.5L170 222.779L155.574 224.257L147.079 236L136 216.5"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path d="M55 49H117" stroke="#1D1D1D" strokeWidth="4" />
                    <path d="M40 63H132" stroke="#1D1D1D" strokeWidth="4" />
                    <path
                      d="M69 101L132 101"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path
                      d="M69 114L132 114"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path
                      d="M69 127L132 127"
                      stroke="#1D1D1D"
                      strokeWidth="4"
                    />
                    <path d="M40 164H69" stroke="#1D1D1D" strokeWidth="4" />
                    <path d="M40 101L52 101" stroke="#1D1D1D" strokeWidth="4" />
                    <path d="M40 114L52 114" stroke="#1D1D1D" strokeWidth="4" />
                    <path d="M40 127L52 127" stroke="#1D1D1D" strokeWidth="4" />
                  </svg>
                </div>
                <p>{el.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default License;
