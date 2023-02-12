import PropTypes from "prop-types";
import styles from "./ConstructorOrder.module.css";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ConstructorOrder = ({ totalPrice, onOpen }) => {
  return (
    <div className={styles.constructor__order + " mr-4"}>
      <div className={styles.constructor__price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
    </div>
  );
};

ConstructorOrder.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};
