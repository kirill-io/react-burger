import uuid from "react-uuid";
import { AppDispatch } from "../types";
import { IIngredientData } from "../../utils/types";

export const ADDING_INGREDIENT: "ADDING_INGREDIENT" = "ADDING_INGREDIENT";
export const REPLACEMENT_INGREDIENT: "REPLACEMENT_INGREDIENT" = "REPLACEMENT_INGREDIENT";
export const MOVE_INGREDIENT: "MOVE_INGREDIENT" = "MOVE_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const CLEAN_INGREDIENT: "CLEAN_INGREDIENT" = "CLEAN_INGREDIENT";

export interface IAddingIngredient {
  readonly type: typeof REPLACEMENT_INGREDIENT | typeof ADDING_INGREDIENT;
  typeIngredient: string;
  ingredient: IIngredientData;
  key: string;
}

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
  dragIndex: number;
  hoverIndex: number;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  elementKey: string;
}

export interface ICleanIngredient {
  readonly type: typeof CLEAN_INGREDIENT;
}

export type TBurgerConstructorActions =
  | IAddingIngredient
  | IMoveIngredient
  | IDeleteIngredient
  | ICleanIngredient;

export const addingIngredient = (typeIngredient: string, ingredient: IIngredientData) => (dispatch: AppDispatch) => {
  if (typeIngredient === "bun") {
    dispatch({
      type: REPLACEMENT_INGREDIENT,
      ingredient: ingredient,
    });
  } else {
    dispatch({
      type: ADDING_INGREDIENT,
      ingredient: ingredient,
      key: uuid(),
    });
  }
};

export const moveIngredient = (dragIndex: number, hoverIndex: number) => (dispatch: AppDispatch) => {
  dispatch({
    type: MOVE_INGREDIENT,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
  });
};

export const deleteIngredient = (elementKey: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: DELETE_INGREDIENT,
    elementKey: elementKey,
  });
};

export const cleanIngredient = () => (dispatch: AppDispatch) => {
  dispatch({
    type: CLEAN_INGREDIENT,
  });
};
