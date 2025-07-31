import { useState } from "react";
import styles from "./CreatingOrder.module.scss";
function CreatingOrder() {
  const [currentStage, setCurrentStage] = useState(0);
  const [mainStage, setMainStage] = useState(0);

  const stages = [
    {
      name: "Корзина",
      //   component: (
      //     <CartStage
      //       setMainStage={setMainStage}
      //       setCurrentStage={setCurrentStage}
      //       data={cartData?.items}
      //     />
      //   ),
    },
    {
      name: "Контактные данные",
      //   component: (
      //     <ContactsStage
      //       setMainStage={setMainStage}
      //       setCurrentStage={setCurrentStage}
      //       contactsValues={contactsValues}
      //       setContactsValues={setContactsValues}
      //     />
      //   ),
    },
    {
      name: "Доставка",
      //   component: (
      //     <DeliveryStage
      //       setMainStage={setMainStage}
      //       setCurrentStage={setCurrentStage}
      //       deliveryValues={deliveryValues}
      //       setDeliveryValues={setDeliveryValues}
      //       handleSubmit={handleSubmit}
      //     />
      //   ),
    },
    {
      name: "Завершение",
      //   component: (
      //     <FinalStage
      //       createOrderLoading={createOrderLoading}
      //       orderNumber={orderNumber}
      //     />
      //   ),
    },
  ];
  return (
    <section className={styles.create}>
      <div className="container">
        <div className={styles.top}>
          <h2>Оформление заказа</h2>
          <div className={styles.stages}>
            {stages.map(({ name }, i) => (
              <button
                key={name}
                className={`${styles.stage} ${
                  currentStage === i && styles.active
                }`}
                onClick={() => {
                  if (i <= mainStage) {
                    setCurrentStage(i);
                  }
                }}
                disabled={i > mainStage}
              >
                {name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreatingOrder;
