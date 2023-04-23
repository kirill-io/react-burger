import { FC } from "react";
import styles from "./OrderList.module.css";
import { OrderItem } from "../OrderItem/OrderItem";
import { IWsOrders } from "../../utils/types";

interface IOrderListProps {
  orders: Array<IWsOrders>;
}

export const OrderList: FC<IOrderListProps> = ({ orders }) => {
  const itemWidth = { width: "584px" };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {orders.map((item) => {
          return (
            <OrderItem
              data={item}
              itemWidth={itemWidth}
              status={false}
              to={"/feed/"}
              key={item.number}
            />
          );
        })}
      </ul>
    </div>
  );
};
