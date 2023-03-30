import uuid from "react-uuid";
import styles from "./OrderIngredientsList.module.css";
import { OrderIngredientImage } from "../../OrderIngredientImage/OrderIngredientImage";

export const OrderIngredientsList = ({ orderIngredients }) => {
  return (
    <ul className={styles.list}>
      {orderIngredients.map((item) => {
        return (
          <li key={uuid()} className={styles.item}>
            <OrderIngredientImage data={item} count={true} />
          </li>
        );
      })}
    </ul>
  );
};
