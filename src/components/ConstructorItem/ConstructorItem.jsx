import React, { useState, useEffect, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import styles from "./ConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const ConstructorItem = ({
  type,
  isLocked,
  text,
  data,
  noIcon,
  index,
  keyString,
  onDelete,
  moveElement,
}) => {
  const [elementKey, setElementKey] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (keyString) {
      setElementKey(keyString);
    }
  }, [keyString]);

  const [{ handlerId }, dropElementRef] = useDrop({
    accept: "ingredientElement",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index; ///перетаскиваемы элемент
      const hoverIndex = index; ///элемент под перетаскиваемым

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveElement(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDrag }, dragElementRef] = useDrag({
    type: "ingredientElement",
    item: () => {
      return { index, keyString };
    },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const opacity = isDrag ? 0 : 1;
  dragElementRef(dropElementRef(ref));

  return (
    <li
      className={"mb-4 " + (type ? styles.item__exception : styles.item)}
      style={{ ...styles, opacity }}
      ref={type ? null : ref}
      data-handler-id={handlerId}
    >
      {!noIcon && <DragIcon type="primary" />}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text ? data.name + text : data.name}
        price={data.price}
        thumbnail={data.image}
        handleClose={() => {
          onDelete(elementKey);
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
  keyString: PropTypes.string,
  onDelete: PropTypes.func,
  moveElement: PropTypes.func,
};
