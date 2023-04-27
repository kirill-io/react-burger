import { FC } from "react";
import styles from "./OrderIngredientsList.module.css";
import { OrderIngredientImage } from "../../OrderIngredientImage/OrderIngredientImage";
import { IIngredientData, IIngredientCount } from "../../../utils/types";

interface IOrderIngredientsListProps {
  orderIngredients: Array<IIngredientData & IIngredientCount> | undefined;
}

export const OrderIngredientsList: FC<IOrderIngredientsListProps> = ({
  orderIngredients,
}) => {
  return (
    <ul className={styles.list}>
      {orderIngredients
        ? orderIngredients.map((item) => {
            return (
              <li key={item._id} className={styles.item}>
                <OrderIngredientImage data={item} count={true} />
              </li>
            );
          })
        : undefined}
    </ul>
  );
};
