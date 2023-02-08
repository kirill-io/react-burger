import { useSelector } from 'react-redux';
import { useDrag } from "react-dnd";
import PropTypes from "prop-types";
import styles from "./IngredientItem.module.css";
import { propTypesData } from "../../utils/prop-types";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientItem = ({ data, onOpen }) => {
  const id = data._id;
  const type = data.type;

  const selectedIngredients = useSelector(store => store.burgerConstructor);

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: {id, type},

  });

  const choiceOfIngredients = () => {
    if (data.type === 'bun') {
      const bun = selectedIngredients.find(item => item._id === data._id);
      if (bun) {
        return 2;
      }
    } else {
      const ingredients = selectedIngredients.filter(item => item._id === data._id);
      if (ingredients.length) {
        return ingredients.length;
      }
    }
    return null;
  };

  return (
    <li className={styles.ingredient__item} onClick={() => onOpen(data)} ref={dragRef}>
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
      {choiceOfIngredients() ? (
        <Counter count={choiceOfIngredients()} size="default" extraClass="m-1" />
      ) : null}
    </li>
  );
};

IngredientItem.propTypes = {
  data: propTypesData,
  onOpen: PropTypes.func.isRequired,
};
