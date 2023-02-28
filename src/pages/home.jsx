import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "./home.module.css";
import { Header } from "../components/Header/Header";
import { BurgerIngredients } from "../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../components/BurgerConstructor/BurgerConstructor";
import { Modal } from "../components/Modal/Modal";
import { IngredientDetails } from "../components/IngredientDetails/IngredientDetails";
import { OrderDetails } from "../components/OrderDetails/OrderDetails";
import { getIngredients } from "../services/actions/getIngredients";
import { setDataIngredient } from "../services/actions/ingredientDetails";
import {
  getOrderNumber,
  hideOrederModal,
} from "../services/actions/orderDetails";

export const HomePage = () => {
  const { ingredientsLoading } = useSelector((store) => store.ingredients);
  const { ingredientDetailsOpen } = useSelector(
    (store) => store.ingredientDetails
  );
  const { orderDetailsOpen } = useSelector((store) => store.orderDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleOpenModalIngredients = (data) => {
    dispatch(setDataIngredient(data));
  };

  const handleCloseModalIngredients = () => {
    dispatch(setDataIngredient());
  };

  const handleOpenModalConstructor = () => {
    dispatch(getOrderNumber());
  };

  const handleCloseModalConstructor = () => {
    dispatch(hideOrederModal());
  };

  return (
    <>
      <Header />
      {ingredientsLoading && (
        <DndProvider backend={HTML5Backend}>
          <main className={styles.content}>
            <div className={styles.container}>
              <BurgerIngredients onOpen={handleOpenModalIngredients} />
              <BurgerConstructor onOpen={handleOpenModalConstructor} />
            </div>
          </main>
        </DndProvider>
      )}
      {ingredientDetailsOpen && (
        <Modal onClose={handleCloseModalIngredients}>
          <IngredientDetails />
        </Modal>
      )}
      {orderDetailsOpen && (
        <Modal onClose={handleCloseModalConstructor}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};
