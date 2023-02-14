import { getOrderNumberRequest } from "../../utils/burger-api";
import { store } from "../../index.jsx";
import { cleanIngredient } from "../actions/burgerConstructor";

export const SET_ID = "SET_ID";
export const SET_ORDER_NUMBER = "SET_ORDER_NUMBER";
export const HIDE_ORDER_MODAL = "HIDE_ORDER_MODAL";

export const setIngredientsId = (ingredientsId) => (dispatch) => {
  dispatch({
    type: SET_ID,
    ingredientsId: ingredientsId,
  });
};

export const getOrderNumber = () => (dispatch) => {
  if (store.getState().orderDetails.ingredientsId.length === 2) {
    alert("Выберите ингредиенты для Вашего бургера.");
  } else {
    getOrderNumberRequest(store.getState().orderDetails.ingredientsId)
      .then((res) => {
        dispatch({
          type: SET_ORDER_NUMBER,
          orderNumber: res,
        });
      })
      .catch(() => alert("Во время формирования заказа произошла ошибка."))
      .finally(() => dispatch(cleanIngredient()));
  }
};

export const hideOrederModal = () => (dispatch) => {
  dispatch({
    type: HIDE_ORDER_MODAL,
  });
};
