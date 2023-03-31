import PropTypes from "prop-types";
import { propTypesItem } from "../../utils/prop-types";
import styles from "./OrderList.module.css";
import { OrderItem } from "../OrderItem/OrderItem";

export const OrderList = ({ orders }) => {
  const itemWidth = { width: "584px"}

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
          {orders.map(item => {
            return <OrderItem data={item} itemWidth={itemWidth} status={false} to={'/feed/'} key={item.number} />;
          })}
        </ul>
      </div>
  );
};

OrderList.propTypes = {
  orders: PropTypes.arrayOf(propTypesItem).isRequired,
};
