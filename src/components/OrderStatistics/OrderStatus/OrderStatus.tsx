import { FC } from "react";
import styles from "./OrderStatus.module.css";

interface IOrderStatusProps {
  data: Array<number>;
  title: string;
  style: { color: string }
}

export const OrderStatus: FC<IOrderStatusProps> = ({ data, title, style }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title + " text text_type_main-medium"}>{title}</h3>
      <ul className={styles.list}>
        {data.map((item) => {
          return (
            <li
              className="text text_type_digits-default"
              style={style}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
