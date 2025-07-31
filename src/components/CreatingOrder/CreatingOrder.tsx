import { useState } from "react";
import styles from "./CreatingOrder.module.scss";
import FinalStage from "../Stages/FinalStage/FinalStage";
import DeliveryStage from "../Stages/DeliveryStage/DeliveryStage";
import ContactsStage from "../Stages/ContactsStage/ContactsStage";
import CartStage from "../Stages/CartStage/CartStage";
import { useCreateOrderMutation, useGetCartQuery } from "../../api/api";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
function CreatingOrder() {
  const { user } = useAuth();

  const [currentStage, setCurrentStage] = useState(0);
  const [mainStage, setMainStage] = useState(4);
  const [orderNumber, setOrderNumber] = useState<number | null>(null);

  const [contactsValues, setContactsValues] = useState({
    name: user?.firstName ?? "",
    surname: user?.lastName ?? "",
    patronymic: "",
    tel: "",
    email: user?.email ?? "",
  });
  const [deliveryValues, setDeliveryValues] = useState({
    area: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
  });

  const { data: cartData } = useGetCartQuery(null);
  const [createOrder, { isLoading: createOrderLoading }] =
    useCreateOrderMutation();

  const handleSubmit = () => {
    createOrder({
      area: deliveryValues.area,
      apartment: deliveryValues.apartment,
      city: deliveryValues.city,
      house: deliveryValues.house,
      phone: contactsValues.tel,
      street: deliveryValues.street,
    }).then((resp) => {
      setOrderNumber(resp.data!);
      toast.success("Заказ оформлен");
      console.log(resp.data);
    });
  };

  const stages = [
    {
      name: "Корзина",
      component: (
        <CartStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          data={cartData?.items}
        />
      ),
    },
    {
      name: "Контактные данные",
      component: (
        <ContactsStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          contactsValues={contactsValues}
          setContactsValues={setContactsValues}
        />
      ),
    },
    {
      name: "Доставка",
      component: (
        <DeliveryStage
          setMainStage={setMainStage}
          setCurrentStage={setCurrentStage}
          deliveryValues={deliveryValues}
          setDeliveryValues={setDeliveryValues}
          handleSubmit={handleSubmit}
        />
      ),
    },
    {
      name: "Завершение",
      component: (
        <FinalStage
          createOrderLoading={createOrderLoading}
          orderNumber={orderNumber}
        />
      ),
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
        <>{stages[currentStage].component}</>
      </div>
    </section>
  );
}

export default CreatingOrder;
