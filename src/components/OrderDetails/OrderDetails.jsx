import PropTypes from "prop-types";
import styles from "./OrderDetails.module.css";
import { CheckMarkIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderDetails = ({ orderId }) => {
  return (
    <>
      <span className={styles.nubmer + ' text text_type_digits-large mb-8'}>{orderId}</span>
      <span className="text text_type_main-medium mb-15">идентификатор заказа</span>
      <div className={styles.image__container + ' mb-15'}>
        <CheckMarkIcon type="primary" />
      </div>
      <span className="text text_type_main-default mb-2">Ваш заказ начали готовить</span>
      <span className="text text_type_main-default text_color_inactive mb-15">Дождитесь готовности на орбитальной станции</span>
    </>
  )
}

OrderDetails.propTypes = {
  orderId: PropTypes.string.isRequired
};
