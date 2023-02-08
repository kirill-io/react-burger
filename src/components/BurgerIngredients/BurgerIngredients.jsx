import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import PropTypes from "prop-types";
import styles from "./BurgerIngredients.module.css";
import { IngredientsCategory } from "../IngredientsCategory/IngredientsCategory";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const TabList = ({ bunClick, mainsClick, sauceClick, selectedTab }) => {
  const [current, setCurrent] = useState("bun");

  useEffect(() => {
    setCurrent(selectedTab);
  }, [selectedTab]);

  return (
    <div className={styles.tabs + " mb-10"}>
      <Tab
        value="bun"
        active={current === "bun"}
        onClick={() => {
          setCurrent("bun");
          bunClick();
        }}
      >
        Булки
      </Tab>
      <Tab
        value="sauce"
        active={current === "sauce"}
        onClick={() => {
          setCurrent("sauce");
          sauceClick();
        }}
      >
        Соусы
      </Tab>
      <Tab
        value="main"
        active={current === "main"}
        onClick={() => {
          setCurrent("main");
          mainsClick();
        }}
      >
        Начинки
      </Tab>
    </div>
  );
};

TabList.propTypes = {
  bunClick: PropTypes.func.isRequired,
  mainsClick: PropTypes.func.isRequired,
  sauceClick: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};

export const BurgerIngredients = ({ onOpen }) => {
  const { ingredients } = useSelector(store => store.ingredients);

  const [ingredientsPosition, setIngredientsPosition] = useState(null);
  const [bunHeight, setBunHeight] = useState(null);
  const [sauceHeight, setSauceHeight] = useState(null);
  const [mainHeight, setMainHeight] = useState(null);
  const [selectedTab, setSelectedTab] = useState('bun');

  useEffect(() => {
    setIngredientsPosition(document.querySelector('#ingredients').getBoundingClientRect().top);
  }, []);

  const buns = React.useMemo(() => {
    return ingredients.filter((item) => item.type === "bun");
  }, [ingredients]);
  const mains = React.useMemo(() => {
    return ingredients.filter((item) => item.type === "main");
  }, [ingredients]);
  const sauces = React.useMemo(() => {
    return ingredients.filter((item) => item.type === "sauce");
  }, [ingredients]);

  const bunRef = React.useRef(null);
  const mainsRef = React.useRef(null);
  const sauceRef = React.useRef(null);

  const bunClick = () => {
    bunRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const mainsClick = () => {
    mainsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sauceClick = () => {
    sauceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollIngredients = (e) => {
    const ingredientsContainerPosition = e.target.firstChild.getBoundingClientRect().top;
    const bunPosition = ingredientsPosition - bunHeight + 1;
    const saucePosition = bunPosition - sauceHeight;
    const mainPosition = saucePosition - mainHeight;

    return ingredientsContainerPosition <= ingredientsPosition && ingredientsContainerPosition >= bunPosition
      ? setSelectedTab('bun')
        : ingredientsContainerPosition <= bunPosition && ingredientsContainerPosition >= saucePosition
          ? setSelectedTab('sauce')
            : ingredientsContainerPosition <= saucePosition && ingredientsContainerPosition >= mainPosition
              ? setSelectedTab('main') : null;
  }

  return (
    <section className={styles.container + " pt-10"}>
      <h1 className="title text text_type_main-large mb-5">Соберите бургер</h1>
      <TabList
        bunClick={bunClick}
        mainsClick={mainsClick}
        sauceClick={sauceClick}
        selectedTab={selectedTab}
      />
      <div className={styles.ingredients} onScroll={scrollIngredients} id='ingredients'>
        <div className={styles.ingredients__container}>
          <IngredientsCategory
            data={buns}
            onOpen={onOpen}
            title="Булки"
            goTo={bunRef}
            setHeight={setBunHeight}
          />
          <IngredientsCategory
            data={sauces}
            onOpen={onOpen}
            title="Соусы"
            goTo={sauceRef}
            setHeight={setSauceHeight}
          />
          <IngredientsCategory
            data={mains}
            onOpen={onOpen}
            title="Начинки"
            goTo={mainsRef}
            setHeight={setMainHeight}
          />
        </div>
      </div>
    </section>
  );
};

BurgerIngredients.propTypes = {
  onOpen: PropTypes.func.isRequired,
};
