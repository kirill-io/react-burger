import PropTypes from "prop-types";
import { propTypesItem } from "../../utils/prop-types";
import styles from "./OrderStatistics.module.css";
import { OrderStatus } from "./OrderStatus/OrderStatus";
import { OrdersComplete } from "./OrdersComplete/OrdersComplete";

export const OrderStatistics = ({ data }) => {
  const orderDone = data.orders.reduce((prevValue, item) => {
    if (item.status === 'done') {
      prevValue.push(item.number);
    }

    return prevValue;
  }, []);

  const orderWork = data.orders.reduce((prevValue, item) => {
    if (item.status === 'created' || item.status === 'pending') {
      prevValue.push(item.number);
    }

    return prevValue;
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <OrderStatus data={orderDone} title={"Готовы:"} style={{color: "#00CCCC"}} />
        <OrderStatus data={orderWork} title={"В работе:"} style={{color: "#F2F2F3"}} />
        <OrdersComplete data={data.total} title={"Выполнено за все время:"}/>
        <OrdersComplete data={data.totalToday} title={"Выполнено за сегодня:"}/>
      </div>
    </div>
  );
};

OrderStatistics.propTypes = PropTypes.shape({
  orders: PropTypes.arrayOf(propTypesItem).isRequired,
  success: PropTypes.bool.isRequired,
  total: PropTypes.number.isRequired,
  totalToday: PropTypes.number.isRequired,
}).isRequired
