import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Outlet, useNavigate } from "react-router-dom";
import styles from "./home.module.css";
import { BurgerIngredients } from "../components/BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../components/BurgerConstructor/BurgerConstructor";
import { Modal } from "../components/Modal/Modal";
import { OrderDetails } from "../components/OrderDetails/OrderDetails";
import { getIngredients } from "../services/actions/getIngredients";
import {
  getOrderNumber,
  hideOrederModal,
} from "../services/actions/orderDetails";
import { getCookie } from "../utils/cookies";

export const HomePage = () => {
  const { ingredientsLoading } = useSelector((store) => store.ingredients);
  const { orderDetailsOpen } = useSelector((store) => store.orderDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  const handleOpenModalConstructor = () => {
    if (!getCookie("isAuthenticated")) {
      navigate("/login");
    } else {
      dispatch(getOrderNumber());
    }
  };

  const handleCloseModalConstructor = () => {
    dispatch(hideOrederModal());
  };

  return (
    <>
      {ingredientsLoading && (
        <DndProvider backend={HTML5Backend}>
          <main className={styles.content}>
            <div className={styles.container}>
              <BurgerIngredients />
              <BurgerConstructor onOpen={handleOpenModalConstructor} />
            </div>
            <Outlet />
          </main>
        </DndProvider>
      )}
      {orderDetailsOpen && (
        <Modal onClose={handleCloseModalConstructor}>
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};
