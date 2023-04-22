import { AppDispatch } from "../types";
import { getOrderNumberRequest } from "../../utils/burger-api";
import { store } from "../../index.jsx";
import { cleanIngredient } from "./burgerConstructor";
import { selectionStop } from "./getIngredients";

export const SET_ID: "SET_ID" = "SET_ID";
export const SET_ORDER_NUMBER: "SET_ORDER_NUMBER" = "SET_ORDER_NUMBER";
export const HIDE_ORDER_MODAL: "HIDE_ORDER_MODAL" = "HIDE_ORDER_MODAL";
export const SET_ORDER_LOAD: "SET_ORDER_LOAD" = "SET_ORDER_LOAD";
export const UNSET_ORDER_LOAD: "UNSET_ORDER_LOAD" = "UNSET_ORDER_LOAD";

export interface ISetIngredientsId {
  readonly type: typeof SET_ID;
  ingredientsId: ReadonlyArray<string>;
}

export interface ISetOrderLoad {
  readonly type: typeof SET_ORDER_LOAD;
}

export interface IUnsetOrderLoad {
  readonly type: typeof UNSET_ORDER_LOAD;
}

export interface IGetOrderNumber {
  readonly type: typeof SET_ORDER_NUMBER;
  orderNumber: number;
}

export interface IHideOrederModal {
  readonly type: typeof HIDE_ORDER_MODAL;
}

export type TOrderDetailsActions =
  | ISetIngredientsId
  | ISetOrderLoad
  | IUnsetOrderLoad
  | IGetOrderNumber
  | IHideOrederModal;

export const setIngredientsId = (ingredientsId: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: SET_ID,
    ingredientsId: ingredientsId,
  });
};

export const setOrderLoad = () => (dispatch: AppDispatch) => {
  if (store.getState().orderDetails.ingredientsId.length > 2) {
    dispatch({
      type: SET_ORDER_LOAD,
    });
  }
};

const unsetOrderLoad = () => (dispatch: AppDispatch) => {
  dispatch({
    type: UNSET_ORDER_LOAD,
  });
};

export const getOrderNumber = () => (dispatch: AppDispatch) => {
  if (store.getState().orderDetails.ingredientsId.length === 2) {
    alert("Выберите ингредиенты для Вашего бургера.");
  } else {
    getOrderNumberRequest(store.getState().orderDetails.ingredientsId)
      .then((res: any) => {
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

export const hideOrederModal = () => (dispatch: AppDispatch) => {
  dispatch({
    type: HIDE_ORDER_MODAL,
  });
};
