import { FC } from "react";
import styles from "./OrderStatistics.module.css";
import { OrderStatus } from "./OrderStatus/OrderStatus";
import { OrdersComplete } from "./OrdersComplete/OrdersComplete";
import { IWsGetData, IWsOrders } from "../../utils/types";

interface IOrderStatisticsProps {
  data: IWsGetData;
}

export const OrderStatistics: FC<IOrderStatisticsProps> = ({ data }) => {
  const orderDone = data.orders.reduce((prevValue: Array<number>, item: IWsOrders) => {
    if (item.status === "done") {
      prevValue.push(item.number);
    }

    return prevValue;
  }, []);

  const orderWork = data.orders.reduce((prevValue: Array<number>, item: IWsOrders) => {
    if (item.status === "created" || item.status === "pending") {
      prevValue.push(item.number);
    }

    return prevValue;
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <OrderStatus
          data={orderDone}
          title={"Готовы:"}
          style={{ color: "#00CCCC" }}
        />
        <OrderStatus
          data={orderWork}
          title={"В работе:"}
          style={{ color: "#F2F2F3" }}
        />
        <OrdersComplete data={data.total} title={"Выполнено за все время:"} />
        <OrdersComplete
          data={data.totalToday}
          title={"Выполнено за сегодня:"}
        />
      </div>
    </div>
  );
};
