import { useSelector } from "react-redux";
import styles from "./IngredientDetails.module.css";
import { Property } from "./Property/Property";

export const IngredientDetails = () => {
  const { ingredient } = useSelector((store) => store.ingredientDetails);

  return (
    <>
      <h2 className={styles.title + " text text_type_main-large"}>
        Детали ингредиента
      </h2>
      <img
        className={styles.image + " mb-4"}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      <h3 className={styles.subtitle + " text text_type_main-medium"}>
        {ingredient.name}
      </h3>
      <div className={styles.properties}>
        <Property title="Калории,ккал" value={ingredient.calories} />
        <Property title="Белки, г" value={ingredient.proteins} />
        <Property title="Жиры, г" value={ingredient.fat} />
        <Property title="Углеводы, г" value={ingredient.carbohydrates} />
      </div>
    </>
  );
};
