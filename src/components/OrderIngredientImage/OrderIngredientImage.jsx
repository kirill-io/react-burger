import PropTypes from "prop-types";
import { propTypesDataAndCount } from "../../utils/prop-types";
import styles from "./OrderIngredientImage.module.css";

export const OrderIngredientImage = ({ data, count }) => {

  if (data.count > 1 && count) {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.image} src={data.image_mobile} alt={data.name} />
          <div className={styles.wrapper_count}>
            <span className={styles.count + " text text_type_main-default"}>+{data.count}</span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <img className={styles.image} src={data.image_mobile} alt={data.name} />
        </div>
      </div>
    );
  }
};

OrderIngredientImage.propTypes = {
  data: propTypesDataAndCount.isRequired,
  count: PropTypes.bool.isRequired,
};
