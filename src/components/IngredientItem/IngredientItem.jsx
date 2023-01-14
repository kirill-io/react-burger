import PropTypes from "prop-types";
import styles from "./IngredientItem.module.css";
import { propTypesData } from "../../utils/prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientItem = ({ data, onOpen }) => {
  return (
    <li className={styles.ingredient__item} onClick={onOpen} id={data._id}>
      <div className={styles.ingredient__container + " pr-4 pl-4"}>
        <img
          className={styles.ingredient__image + " mb-2"}
          src={data.image}
          alt={data.name}
        />
        <div className={styles.ingredient__price + " mb-2"}>
          <span className="text text_type_digits-default">{data.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className={styles.ingredient__name + " text text_type_main-default"}>
        {data.name}
      </p>
      {Number(data.amount) ? (
        <Counter count={data.amount} size="default" extraClass="m-1" />
      ) : null}
    </li>
  );
};

IngredientItem.propTypes = {
  data: propTypesData,
  onOpen: PropTypes.func.isRequired,
};
