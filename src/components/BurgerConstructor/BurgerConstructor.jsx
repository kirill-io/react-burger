import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import { ConstructorItem } from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setIngredientsId } from "../../services/actions/orderDetails";
import {
  addingIngredient,
  deleteIngredient,
  dropIngredient,
} from "../../services/actions/burgerConstructor";

const ConstructorOrder = ({ totalPrice, onOpen }) => {
  return (
    <div className={styles.constructor__order + " mr-4"}>
      <div className={styles.constructor__price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
    </div>
  );
};

ConstructorOrder.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export const BurgerConstructor = ({ onOpen }) => {
  const ingredientsAll = useSelector((store) => store.ingredients.ingredients);
  const selectedIngredients = useSelector((store) => store.burgerConstructor);
  const dispatch = useDispatch();
  const [dragElement, setDragElement] = useState(null);
  const [dragElementIndex, setDragElementIndex] = useState(null);

  useEffect(() => {
    dispatch(setIngredientsId(ingredientsId()));
  }, [dispatch, selectedIngredients]); // eslint-disable-line

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemIngredient) {
      dispatch(
        addingIngredient(
          itemIngredient.type,
          ingredientsAll.find((item) => item._id === itemIngredient.id)
        )
      );
    },
  });

  const [, dropIngredientTarget] = useDrop({
    accept: "ingredientElement",
  });

  const bunDragged = selectedIngredients.find((item) => item.type === "bun");
  const ingredientsDragged = selectedIngredients.filter(
    (item) => item.type !== "bun"
  );

  const totalPrice = useMemo(
    () =>
      bunDragged.price * 2 +
      ingredientsDragged.reduce((acc, item) => (acc += item.price), 0),
    [bunDragged, ingredientsDragged]
  );

  const ingredientsId = () => {
    const id = selectedIngredients.map((item) => item._id);
    id.push(selectedIngredients[0]._id);
    return id;
  };

  const handleDeleteIngredient = (index) => {
    dispatch(deleteIngredient(index));
  };

  const handleDragStart = (item, index) => {
    setDragElement(item);
    setDragElementIndex(index);
  };

  const handleDrop = (e, indexDrop) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteIngredient(dragElementIndex));
    dispatch(dropIngredient(dragElement, indexDrop));
  };

  return (
    <section
      className={styles.constructor__container + " pt-25 pl-4"}
      ref={dropTarget}
    >
      <ul className={styles.constructor__list + " mb-10"}>
        <ConstructorItem
          type="top"
          isLocked={true}
          text=" (верх)"
          data={bunDragged}
          noIcon={true}
        />
        <li
          className={styles.constructor__item_center}
          ref={dropIngredientTarget}
        >
          <ul className={styles.list}>
            {ingredientsDragged.map((item, i) => {
              return (
                <ConstructorItem
                  data={item}
                  key={item._id + i}
                  index={i + 1}
                  onDelete={handleDeleteIngredient}
                  dragStart={handleDragStart}
                  drop={handleDrop}
                />
              );
            })}
          </ul>
        </li>
        <ConstructorItem
          type="bottom"
          isLocked={true}
          text=" (низ)"
          data={bunDragged}
          noIcon={true}
        />
      </ul>
      <ConstructorOrder totalPrice={totalPrice} onOpen={onOpen} />
    </section>
  );
};

BurgerConstructor.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
