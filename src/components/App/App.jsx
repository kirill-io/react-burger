import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";
import { getIngredients } from '../../services/actions/getIngredients';
import { setDataIngredient } from '../../services/actions/ingredientDetails';
import { getOrderNumber, hideOrederModal } from '../../services/actions/orderDetails';

export const App = () => {
  const { ingredientsLoading } = useSelector(store => store.ingredients);
  const { ingredientDetailsOpen } = useSelector(store => store.ingredientDetails);
  const { orderDetailsOpen } =  useSelector(store => store.orderDetails);
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
      <AppHeader />
      {ingredientsLoading && (
        <main className={styles.content}>
          <div className={styles.container}>
            <BurgerIngredients
              onOpen={handleOpenModalIngredients}
            />
            <BurgerConstructor onOpen={handleOpenModalConstructor} />
          </div>
        </main>
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
