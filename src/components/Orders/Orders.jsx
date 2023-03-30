import styles from "./Orders.module.css";
import { OrderItem } from "../OrderItem/OrderItem";

import { testData } from "../../utils/testData";

export const Orders = () => {
  const itemWidth = { width: "844px"}

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {testData.orders.map(item => {
            return <OrderItem data={item} itemWidth={itemWidth} status={true} to={'/orders/'} key={item._id} />;
          })}
        </ul>
      </div>
    </section>
  );
};
