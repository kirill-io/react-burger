import React from "react";
import styles from "./App.module.css";
import { getIngredients, getOrderNumber } from "../../utils/burger-api";
import { IngredientsContext } from "../../services/ingredientsContext";
import { OrderNumberContext } from "../../services/orderNumberContext";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

export const App = () => {
  const [ingredients, setIngredients] = React.useState(null);
  const [ingredientsLoading, setIngredientsLoading] = React.useState(true);
  const [dataIngredient, setDataIngredient] = React.useState(null);
  const [ingredientDetailsOpen, setIngredientDetailsOpen] =
    React.useState(null);
  const [orderDetailsOpen, setOrderDetailsOpen] = React.useState(null);
  const [orderNumber, setOrderNumber] = React.useState(null);
  const [ingredientsId, setIngredientsId] = React.useState(null);

  React.useEffect(() => {
    getIngredients()
      .then(setIngredients)
      .catch(() => alert("Во время загрузки ингредиентов произошла ошибка."))
      .finally(() => setIngredientsLoading(false));
  }, []);

  const handleOpenModalIngredients = (data) => {
    setDataIngredient(data);
    setIngredientDetailsOpen(true);
  };

  const handleOpenModalConstructor = () => {
    getOrderNumber(ingredientsId)
      .then((res) => setOrderNumber(res))
      .catch(() => alert("Во время формирования заказа произошла ошибка."))
      .finally(() => setOrderDetailsOpen(true));
  };

  const handleCloseModal = () => {
    setIngredientDetailsOpen(false);
    setOrderDetailsOpen(false);
  };

  return (
    <>
      <AppHeader />
      <OrderNumberContext.Provider value={orderNumber}>
        <IngredientsContext.Provider value={ingredients}>
          {!ingredientsLoading && (
            <main className={styles.content}>
              <div className={styles.container}>
                <BurgerIngredients
                  data={ingredients}
                  onOpen={handleOpenModalIngredients}
                />
                <BurgerConstructor setIngredientsId={ setIngredientsId } onOpen={handleOpenModalConstructor} />
              </div>
            </main>
          )}
        </IngredientsContext.Provider>
        {ingredientDetailsOpen && (
          <Modal onClose={handleCloseModal}>
            <IngredientDetails data={dataIngredient} />
          </Modal>
        )}
        {orderDetailsOpen && (
          <Modal onClose={handleCloseModal}>
            <OrderDetails />
          </Modal>
        )}
      </OrderNumberContext.Provider>
    </>
  );
};
