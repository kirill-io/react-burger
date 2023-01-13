import React from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

export const App = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.content}>
        <div className={styles.container}>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
    </>
  );
};
