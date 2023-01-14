import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { IngredientsCategory } from "../IngredientsCategory/IngredientsCategory";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

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

export const BurgerIngredients = ({ data, onOpen }) => {
  const buns = React.useMemo(() => {
    return data.filter((item) => item.type === "bun");
  }, [data]);
  const mains = React.useMemo(() => {
    return data.filter((item) => item.type === "main");
  }, [data]);
  const sauces = React.useMemo(() => {
    return data.filter((item) => item.type === "sauce");
  }, [data]);

  return (
    <section className={styles.container + " pt-10"}>
      <h1 className="title text text_type_main-large mb-5">Соберите бургер</h1>
      <TabList />
      <div className={styles.ingredients}>
        <div className={styles.ingredients__container}>
          <IngredientsCategory data={buns} onOpen={onOpen} title="Булки" />
          <IngredientsCategory data={sauces} onOpen={onOpen} title="Соусы" />
          <IngredientsCategory data={mains} onOpen={onOpen} title="Начинки" />
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      calories: PropTypes.number,
      carbohydrates: PropTypes.number,
      fat: PropTypes.number,
      image: PropTypes.string.isRequired,
      image_large: PropTypes.string,
      image_mobile: PropTypes.string,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      proteins: PropTypes.number,
      type: PropTypes.string.isRequired,
      __v: PropTypes.number,
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onOpen: PropTypes.func.isRequired,
};
