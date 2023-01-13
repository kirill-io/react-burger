import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";

const Property = ({ children, value }) => {
  return (
    <div className={styles.property + ' text text_type_main-default text_color_inactive'}>
      <div className={styles.property__title}>{children}</div>
      <div className="text text_type_digits-default">{value}</div>
    </div>
  )
}

Property.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export const IngredientDetails = ({data}) => {
  return (
    <>
      <h2 className={styles.title + ' text text_type_main-large'}>Детали ингредиента</h2>
      <img className={styles.image + ' mb-4'} src={data.image_large} alt={data.name} />
      <h3 className={styles.subtitle + ' text text_type_main-medium'}>{data.name}</h3>
      <div className={styles.properties}>
        <Property children="Калории,ккал" value={data.calories} />
        <Property children="Белки, г" value={data.proteins} />
        <Property children="Жиры, г" value={data.fat} />
        <Property children="Углеводы, г" value={data.carbohydrates} />
      </div>
    </>
  )
}

IngredientDetails.propTypes = {
  data: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price:  PropTypes.number,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  }).isRequired
};
