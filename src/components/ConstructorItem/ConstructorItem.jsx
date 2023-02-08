import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ConstructorItem = ({ type, isLocked, text, data, noIcon, index, onDelete }) => {
  const [indexNumber, setIndexNumber] = useState(null);

  useEffect(() => {
    if (index) {
      setIndexNumber(index);
    }
  }, [])

  return (
    <li className={type ? styles.item__exception : styles.item}>
      {!noIcon && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text ? data.name + text : data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => {
          onDelete(indexNumber);
        }}
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
  index: PropTypes.number,
  onDelete: PropTypes.func
};
