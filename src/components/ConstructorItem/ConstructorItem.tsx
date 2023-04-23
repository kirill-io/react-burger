import { useState, useEffect, useRef, FC } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { XYCoord } from "dnd-core";
import styles from "./ConstructorItem.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { IIngredientData } from "../../utils/types";

interface IConstructorItemProps {
  type: "top" | "bottom" | undefined;
  isLocked?: boolean;
  text?: string;
  data: IIngredientData;
  noIcon?: boolean;
  index?: number;
  keyString?: string;
  onDelete: (i: string) => void;
  moveElement?: (dragIndex: number, hoverIndex: number) => void;
}

export const ConstructorItem: FC<IConstructorItemProps> = ({
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
  const [elementKey, setElementKey] = useState<string>('');
  const ref = useRef<HTMLLIElement>(null);

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
    hover(item: any, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (hoverIndex) {
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }

        if (typeof (moveElement) === "function") {
          moveElement(dragIndex, hoverIndex);
        }
      }

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
