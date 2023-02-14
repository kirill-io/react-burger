import PropTypes from "prop-types";
import styles from "./Property.module.css";

export const Property = ({ title, value }) => {
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
