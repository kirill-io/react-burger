import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import { ConstructorItem } from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { setIngredientsId } from '../../services/actions/orderDetails';

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
  const selectedIngredients = useSelector(store => store.burgerConstructor);
  const dispatch = useDispatch();

  const bun = selectedIngredients.find((item) => item.type === "bun");
  const ingredients = selectedIngredients.filter((item) => item.type !== "bun");

  const totalPrice = useMemo(
    () =>
      bun.price * 2 + ingredients.reduce((acc, item) => (acc += item.price), 0),
    [bun, ingredients]
  );

  const ingredientsId = () => {
    const id = selectedIngredients.map((item) => item._id);
    return id.push(selectedIngredients[0]._id);
  };

  useEffect(() => {
    dispatch(setIngredientsId(ingredientsId()));
  }, [dispatch]); // eslint-disable-line

  return (
    <section className={styles.constructor__container + " pt-25 pl-4"}>
      <ul className={styles.constructor__list + " mb-10"}>
        <ConstructorItem
          type="top"
          isLocked={true}
          text=" (верх)"
          data={bun}
          noIcon={true}
        />
        <li className={styles.constructor__item_center}>
          <ul className={styles.list}>
            {ingredients.map((item, i) => {
              return <ConstructorItem data={item} key={item._id + i} />;
            })}
          </ul>
        </li>
        <ConstructorItem
          type="bottom"
          isLocked={true}
          text=" (низ)"
          data={bun}
          noIcon={true}
        />
      </ul>
      <ConstructorOrder totalPrice={totalPrice} onOpen={onOpen} />
    </section>
  );
};

BurgerConstructor.propTypes = {
  onOpen: PropTypes.func.isRequired
};
