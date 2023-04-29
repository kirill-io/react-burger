import { FC } from "react";
import styles from "./Orders.module.css";
import { OrderItem } from "../OrderItem/OrderItem";
import { IWsOrders } from "../../utils/types";

interface IOrdersProps {
  data: Array<IWsOrders>;
}

export const Orders: FC<IOrdersProps> = ({ data }) => {
  const itemWidth = { width: "844px" };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {data.map((item) => {
            return (
              <OrderItem
                data={item}
                itemWidth={itemWidth}
                status={true}
                to={"/orders/"}
                key={item._id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};
