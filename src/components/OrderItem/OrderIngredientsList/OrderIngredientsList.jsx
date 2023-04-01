import PropTypes from "prop-types";
import { propTypesDataAndCount } from "../../../utils/prop-types";
import styles from "./OrderIngredientsList.module.css";
import { OrderIngredientImage } from "../../OrderIngredientImage/OrderIngredientImage";

export const OrderIngredientsList = ({ orderIngredients }) => {
  return (
    <ul className={styles.list}>
      {orderIngredients.map((item) => {
        return (
          <li key={item._id} className={styles.item}>
            <OrderIngredientImage data={item} count={true} />
          </li>
        );
      })}
    </ul>
  );
};

OrderIngredientsList.propTypes = {
  orderIngredients: PropTypes.arrayOf(propTypesDataAndCount.isRequired)
    .isRequired,
};
