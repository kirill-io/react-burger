import { FC } from "react";
import { useSelector } from "../../services/hooks";
import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import styles from "./IngredientItem.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredientData } from "../../utils/types";

interface IIngredientItemProps {
  data: IIngredientData;
}

export const IngredientItem: FC<IIngredientItemProps> = ({ data }) => {
  const id = data._id;
  const type = data.type;

  const selectionStarted = useSelector(
    (store) => store.ingredients.selectionStarted
  );
  const selectedIngredients = useSelector((store) => store.burgerConstructor);

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: { id, type },
  });

  const choiceOfIngredients = () => {
    if (data.type === "bun") {
      const bun = selectedIngredients.find((item: IIngredientData) => item._id === data._id);
      if (bun) {
        return 2;
      }
    } else {
      const ingredients = selectedIngredients.filter(
        (item: IIngredientData) => item._id === data._id
      );
      if (ingredients.length) {
        return ingredients.length;
      }
    }
    return null;
  };

  return (
    <li>
      <Link
        className={styles.ingredient__item}
        ref={dragRef}
        to={`/ingredients/${data._id}`}
        state={{ modal: true }}
      >
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
        {choiceOfIngredients() && selectionStarted ? (
          <Counter
            count={choiceOfIngredients()}
            size="default"
            extraClass="m-1"
          />
        ) : null}
      </Link>
    </li>
  );
};
