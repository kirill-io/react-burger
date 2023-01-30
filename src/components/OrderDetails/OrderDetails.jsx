import React from "react";
import styles from "./OrderDetails.module.css";
import { IngredientsContext } from "../../services/ingredientsContext";
import { getOrderNumber } from "../../utils/burger-api";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderDetails = () => {
  const [orderNumber, setOrderNumber] = React.useState(null);
  const [loadOrderNumber, setLoadOrderNumber] = React.useState(false);

  const data = React.useContext(IngredientsContext);

  const ingredientsId = data.map((item) => item._id);

  React.useEffect(() => {
    getOrderNumber(ingredientsId)
      .then((res) => {
        setOrderNumber(res);
      })
      .catch(() => alert("Во время формирования заказа произошла ошибка."))
      .finally(() => setLoadOrderNumber(true));
  }, []);

  return (
    <>
      {loadOrderNumber && (
        <div className={styles.container}>
          <span className={styles.nubmer + " text text_type_digits-large mb-8"}>
            {orderNumber}
          </span>
          <span className="text text_type_main-medium mb-15">
            идентификатор заказа
          </span>
          <div className={styles.image__container + " mb-15"}>
            <CheckMarkIcon type="primary" />
          </div>
          <span className="text text_type_main-default mb-2">
            Ваш заказ начали готовить
          </span>
          <span className="text text_type_main-default text_color_inactive mb-15">
            Дождитесь готовности на орбитальной станции
          </span>
        </div>
      )}
    </>
  );
};
