import styles from "./OrderStatistics.module.css";
import { OrderStatus } from "./OrderStatus/OrderStatus";
import { OrdersComplete } from "./OrdersComplete/OrdersComplete";

import { testData } from "../../utils/testData";

export const OrderStatistics = () => {
  const orderSort = (data, condition) => {
    return data.reduce((prevValue, item) => {
      if (item.status === condition) {
        prevValue.push(item._id);
      }

      return prevValue;
    }, []);
  };

  const orderDone = orderSort(testData.orders, 'done');

  const orderWork = orderSort(testData.orders, 'work');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.status}>
          <OrderStatus data={orderDone} title={"Готовы:"} style={{color: "#00CCCC"}}/>
          <OrderStatus data={orderWork} title={"В работе:"} style={{color: "#F2F2F3"}}/>
        </div>
        <OrdersComplete data={testData.total} title={"Выполнено за все время:"}/>
        <OrdersComplete data={testData.totalToday} title={"Выполнено за сегодня:"}/>
      </div>
    </div>
  );
};
