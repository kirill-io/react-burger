import uuid from "react-uuid";
import PropTypes from "prop-types";
import styles from "./OrderStatus.module.css";

export const OrderStatus = ({ data, title, style }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title + " text text_type_main-medium"}>{title}</h3>
      <ul className={styles.list}>
        {data.map(item => {
          return <li className="text text_type_digits-default" style={style} key={uuid()}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

OrderStatus.propTypes = {
  data: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  title: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
};
