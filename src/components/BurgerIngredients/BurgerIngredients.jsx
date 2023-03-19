import React, { useState, useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import styles from "./BurgerIngredients.module.css";
import { TabList } from "./TabList/TabList";
import { IngredientsCategory } from "../IngredientsCategory/IngredientsCategory";

export const BurgerIngredients = () => {
  const { ingredients } = useSelector((store) => store.ingredients);

  const [selectedTab, setSelectedTab] = useState("bun");

  const buns = useMemo(() => {
    return ingredients.filter((item) => item.type === "bun");
  }, [ingredients]);
  const mains = useMemo(() => {
    return ingredients.filter((item) => item.type === "main");
  }, [ingredients]);
  const sauces = useMemo(() => {
    return ingredients.filter((item) => item.type === "sauce");
  }, [ingredients]);

  const bunRef = useRef(null);
  const mainsRef = useRef(null);
  const sauceRef = useRef(null);

  const bunClick = () => {
    bunRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const mainsClick = () => {
    mainsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const sauceClick = () => {
    sauceRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const options = {
    root: document.querySelector("#ingredients"),
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (i === 0) {
        if (entry.isIntersecting && entry.target.id === "bun") {
          setSelectedTab("bun");
        } else if (
          !entry.isIntersecting &&
          entry.target.id === "bun" &&
          entry.intersectionRect.width
        ) {
          setSelectedTab("sauce");
        } else if (entry.isIntersecting && entry.target.id === "sauce") {
          setSelectedTab("sauce");
        } else if (!entry.isIntersecting && entry.target.id === "sauce") {
          setSelectedTab("main");
        }
      }
    });
  }, options);

  const categories = document.querySelectorAll(".ingredient__category");
  categories.forEach((i) => {
    observer.observe(i);
  });

  return (
    <section className={styles.container + " pt-10"}>
      <h1 className="title text text_type_main-large mb-5">Соберите бургер</h1>
      <TabList
        bunClick={bunClick}
        mainsClick={mainsClick}
        sauceClick={sauceClick}
        selectedTab={selectedTab}
      />
      <div className={styles.ingredients} id="ingredients">
        <div className={styles.ingredients__container}>
          <IngredientsCategory data={buns} title="Булки" goTo={bunRef} />
          <IngredientsCategory data={sauces} title="Соусы" goTo={sauceRef} />
          <IngredientsCategory data={mains} title="Начинки" goTo={mainsRef} />
        </div>
      </div>
    </section>
  );
};
