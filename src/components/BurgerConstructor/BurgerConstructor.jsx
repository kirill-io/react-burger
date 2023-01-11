import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import {
  DragIcon,
  ConstructorElement,
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorItem = ({ type, isLocked, text, data, noIcon }) => {
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

const ConstructorOrder = ({ data, onOpen }) => {
  return (
    <div className={styles.constructor__order + " mr-4"}>
      <div className={styles.constructor__price}>
        <ConstructorPrice data={data} />
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
    </div>
  );
};

const ConstructorPrice = ({ data }) => {
  const sum = data.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.price * currentValue.amount;
  }, 0);
  return <span className="text text_type_digits-medium">{sum}</span>;
};

export const BurgerConstructor = ({ data, onOpen }) => {
  const ingredients = data.filter(
    (item) => Number(item.amount >= 1) && item.type !== "bun"
  );
  const bun = data.find(
    (item) => Number(item.amount) >= 1 && item.type === "bun"
  );

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
            {ingredients.map((item) => {
              return <ConstructorItem data={item} key={item._id} />;
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
      <ConstructorOrder data={data} onOpen={onOpen}/>
    </section>
  );
};

ConstructorItem.propTypes = {
  type: PropTypes.string,
  isLocked: PropTypes.bool,
  text: PropTypes.string,
  data: PropTypes.object.isRequired,
  noIcon: PropTypes.bool,
};

ConstructorOrder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

ConstructorPrice.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
