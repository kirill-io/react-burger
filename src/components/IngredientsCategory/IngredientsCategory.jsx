import PropTypes from "prop-types";
import styles from "./IngredientsCategory.module.css";
import { IngredientItem } from "../IngredientItem/IngredientItem";

export const IngredientsCategory = ({ data, children, onOpen }) => {
  return (
    <>
      <h2 className="subtitle text text_type_main-medium">{children}</h2>
      <ul className={styles.ingredients__list + " pt-6 pl-4"}>
        {data.map((item) => {
          return <IngredientItem data={item} key={item._id} onOpen={onOpen} />;
        })}
      </ul>
    </>
  );
};

IngredientsCategory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
      image: PropTypes.string.isRequired,
      image_large: PropTypes.string,
      image_mobile: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      proteins: PropTypes.number,
      type: PropTypes.string.isRequired,
      __v: PropTypes.number,
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  children: PropTypes.string.isRequired,
  onOpen: PropTypes.func.isRequired,
};
