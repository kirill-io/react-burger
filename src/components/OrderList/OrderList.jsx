import styles from "./OrderList.module.css";
import { OrderItem } from "./OrderItem/OrderItem";

import { testData } from "../../utils/testData";

export const OrderList = () => {
  const itemWidth = { width: "584px"}

  return (
    <div className={styles.container}>
        <ul className={styles.list}>
          {testData.orders.map(item => {
            return <OrderItem data={item} itemWidth={itemWidth} key={item._id} />;
          })}
        </ul>
      </div>
  );
};
