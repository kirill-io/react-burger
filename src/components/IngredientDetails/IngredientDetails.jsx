import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";
import { propTypesData } from "../../utils/prop-types";

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

export const IngredientDetails = ({ data }) => {
  return (
    <>
      <h2 className={styles.title + " text text_type_main-large"}>
        Детали ингредиента
      </h2>
      <img
        className={styles.image + " mb-4"}
        src={data.image_large}
        alt={data.name}
      />
      <h3 className={styles.subtitle + " text text_type_main-medium"}>
        {data.name}
      </h3>
      <div className={styles.properties}>
        <Property title="Калории,ккал" value={data.calories} />
        <Property title="Белки, г" value={data.proteins} />
        <Property title="Жиры, г" value={data.fat} />
        <Property title="Углеводы, г" value={data.carbohydrates} />
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  data: propTypesData,
};
