import { FC } from "react";
import styles from "./OrdersComplete.module.css";

interface IOrdersCompleteProps {
  data: number;
  title: string;
}

export const OrdersComplete: FC<IOrdersCompleteProps> = ({ data, title }) => {
  return (
    <div>
      <h3 className="text text_type_main-medium">{title}</h3>
      <p className={styles.text + " text text_type_digits-large"}>{data}</p>
    </div>
  );
};
