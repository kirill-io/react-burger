import { getOrderNumberRequest } from "../../utils/burger-api";
import { store } from "../../index.jsx";
import { cleanIngredient } from "../actions/burgerConstructor";
import { selectionStop } from "./getIngredients";

export const SET_ID = "SET_ID";
export const SET_ORDER_NUMBER = "SET_ORDER_NUMBER";
export const HIDE_ORDER_MODAL = "HIDE_ORDER_MODAL";
export const SET_ORDER_LOAD = "SET_ORDER_LOAD";
export const UNSET_ORDER_LOAD = "UNSET_ORDER_LOAD";

export const setIngredientsId = (ingredientsId) => (dispatch) => {
  dispatch({
    type: SET_ID,
    ingredientsId: ingredientsId,
  });
};

export const setOrderLoad = () => (dispatch) => {
  if (store.getState().orderDetails.ingredientsId.length > 2) {
    dispatch({
      type: SET_ORDER_LOAD,
    });
  }
};

const unsetOrderLoad = () => (dispatch) => {
  dispatch({
    type: UNSET_ORDER_LOAD,
  });
};

export const getOrderNumber = () => (dispatch) => {
  if (store.getState().orderDetails.ingredientsId.length === 2) {
    alert("Выберите ингредиенты для Вашего бургера.");
  } else {
    getOrderNumberRequest(store.getState().orderDetails.ingredientsId)
      .then((res) => {
        dispatch(unsetOrderLoad());
        dispatch({
          type: SET_ORDER_NUMBER,
          orderNumber: res.order.number,
        });
      })
      .catch(() => alert("Во время формирования заказа произошла ошибка."))
      .finally(() => {
        dispatch(cleanIngredient());
        dispatch(selectionStop());
      });
  }
};

export const hideOrederModal = () => (dispatch) => {
  dispatch({
    type: HIDE_ORDER_MODAL,
  });
};
