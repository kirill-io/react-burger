import PropTypes from "prop-types";
import styles from "./ConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ConstructorItem = ({ type, isLocked, text, data, noIcon }) => {
  return (
    <li className={type ? styles.item__exception : styles.item}>
      {!noIcon && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text ? data.name + text : data.name}
        price={data.price}
        thumbnail={data.image}
      />
    </li>
  );
};

ConstructorItem.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  data: PropTypes.object.isRequired,
  noIcon: PropTypes.bool,
};
