import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import styles from "./ProfilePage.module.scss";
import { logoutUser } from "../../store/slices/authSlice";
import { useGetOrdersQuery } from "../../api/api";
import { useState } from "react";
import OrdersStage from "../../components/Stages/OrdersStage/OrdersStage";
import Header from "../../components/Header/Header";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Footer from "../../components/Footer/Footer";
import { ImExit } from "react-icons/im";

function ProfilePage() {
  const [currentStage, setCurrentStage] = useState(0);

  const { data: ordersData } = useGetOrdersQuery(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  const stages = [
    {
      name: "Мои заказы",
      img: (
        <svg
          className={styles.icon}
          width="26"
          height="31"
          viewBox="0 0 26 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25 8.64286L13 2L1 8.64286M25 8.64286L13 15.2857M25 8.64286V22.5714L13 29M13 15.2857L1 8.64286M13 15.2857V29M1 8.64286V22.5714L13 29"
            stroke="#1a2749"
            strokeWidth="2"
          />
        </svg>
      ),
      component: <OrdersStage ordersData={ordersData} />,
    },
  ];
  return (
    <>
      <Header />
      <Breadcrumbs />
      <section className={styles.profile}>
        <div className="container">
          <h2 className={styles.title}>Личный кабинет</h2>
          <div className={styles.row}>
            <div className={styles.menu}>
              <div className={styles.menu__col}>
                {stages.map(({ name, img }, index) => (
                  <div
                    key={name}
                    className={`${styles.menu__item} ${
                      index === currentStage && styles.active
                    }`}
                    onClick={() => setCurrentStage(index)}
                  >
                    {img}
                    <p>{name}</p>
                  </div>
                ))}
                <div onClick={logout} className={styles.logout}>
                  <ImExit size={28} />
                  <p>Выйти</p>
                </div>
              </div>
            </div>
            <div className={styles.content}>
              {stages[currentStage].component}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProfilePage;
