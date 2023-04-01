import PropTypes from "prop-types";
import { propTypesItem } from "../../utils/prop-types";
import styles from "./Orders.module.css";
import { OrderItem } from "../OrderItem/OrderItem";

export const Orders = ({ data }) => {
  const itemWidth = { width: "844px"}

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <ul className={styles.list}>
          {data.map(item => {
            return <OrderItem data={item} itemWidth={itemWidth} status={true} to={'/orders/'} key={item._id} />;
          })}
        </ul>
      </div>
    </section>
  );
};

Orders.propTypes = {
  data: PropTypes.arrayOf(propTypesItem).isRequired,
};
