import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";

const Property = ({ title, value }) => {
  return (
    <div
      className={
        styles.property + " text text_type_main-default text_color_inactive"
      }
    >
      <div className={styles.property__title}>{title}</div>
      <div className="text text_type_digits-default">{value}</div>
    </div>
  );
};

Property.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

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
