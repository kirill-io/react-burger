import { request } from "../../utils/burger-api";
import { AppDispatch } from "../types";
import { IIngredientData } from "../../utils/types";

export const GET_INGREDIENT_SUCCESS: "GET_INGREDIENT_SUCCESS" =
  "GET_INGREDIENT_SUCCESS";
export const SELECTION_STARTED: "SELECTION_STARTED" = "SELECTION_STARTED";
export const SELECTION_STOPPPED: "SELECTION_STOPPPED" = "SELECTION_STOPPPED";

export interface IGetIngredients {
  readonly type: typeof GET_INGREDIENT_SUCCESS;
  data: Array<IIngredientData>;
}

export interface ISelectionStart {
  readonly type: typeof SELECTION_STARTED;
}

export interface ISelectionStop {
  readonly type: typeof SELECTION_STOPPPED;
}

export type TGetIngredientsActions =
  | IGetIngredients
  | ISelectionStart
  | ISelectionStop;

export const getIngredients = () => (dispatch: AppDispatch) => {
  request("/ingredients")
    .then((res: any) => {
      dispatch({
        type: GET_INGREDIENT_SUCCESS,
        data: res.data,
      });
    })
    .catch(() => alert("Во время загрузки ингредиентов произошла ошибка."));
};

export const selectionStart = () => (dispatch: AppDispatch) => {
  dispatch({
    type: SELECTION_STARTED,
  });
};

export const selectionStop = () => (dispatch: AppDispatch) => {
  dispatch({
    type: SELECTION_STOPPPED,
  });
};
