import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import {
  Tab,
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";

const TabList = () => {
  const [current, setCurrent] = React.useState("one");
  return (
    <div className={styles.tabs + " mb-10"}>
      <Tab value="one" active={current === "one"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === "two"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === "three"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

// Не совсем понимаю как отключить пердупреждения в терминале,
// добавлял и делал как в статье, но не получается

/* eslint-disable */
const IngredientsCategory = ({ data, type, children }) => {
  return (
    <>
      <h2 className="subtitle text text_type_main-medium">{children}</h2>
      <ul className={styles.ingredients__list + " pt-6 pl-4"}>
        {data.map((item) => {
          if (item.type === type) {
            return <IngredientItem data={item} key={item._id} />;
          }
        })}
      </ul>
    </>
  );
};
/* eslint-enable */

const IngredientItem = ({ data }) => {
  return (
    <li className={styles.ingredient__item}>
      <div className={styles.ingredient__container + " pr-4 pl-4"}>
        <img
          className={styles.ingredient__image + " mb-2"}
          src={data.image}
          alt={data.name}
        />
        <div className={styles.ingredient__price + " mb-2"}>
          <span className="text text_type_digits-default">{data.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
      <p className={styles.ingredient__name + " text text_type_main-default"}>
        {data.name}
      </p>
      {Number(data.amount) ? (
        <Counter count={data.amount} size="default" extraClass="m-1" />
      ) : null}
    </li>
  );
};

export const BurgerIngredients = ({ data }) => {
  return (
    <div className={styles.container + " pt-10"}>
      <h1 className="title text text_type_main-large mb-5">Соберите бургер</h1>
      <TabList />
      <div className={styles.ingredients}>
        <div className={styles.ingredients__container}>
          <IngredientsCategory data={data} type="bun">
            Булки
          </IngredientsCategory>
          <IngredientsCategory data={data} type="sauce">
            Соусы
          </IngredientsCategory>
          <IngredientsCategory data={data} type="main">
            Начинки
          </IngredientsCategory>
        </div>
      </div>
    </div>
  );
};

IngredientsCategory.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

IngredientItem.propTypes = {
  data: PropTypes.object.isRequired,
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
