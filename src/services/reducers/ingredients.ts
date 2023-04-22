import {
  GET_INGREDIENT_SUCCESS,
  SELECTION_STARTED,
  SELECTION_STOPPPED,
} from "../actions/getIngredients";
import { IIngredientData } from "../../utils/types";
import { TGetIngredientsActions } from "../actions/getIngredients";

type TIngredientsState = {
  ingredients: ReadonlyArray<IIngredientData>;
  ingredientsLoading: boolean;
  selectionStarted: boolean;
}

const initialState: TIngredientsState = {
  ingredients: [],
  ingredientsLoading: false,
  selectionStarted: false,
};

export const ingredients = (state = initialState, action: TGetIngredientsActions): TIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENT_SUCCESS: {
      return {
        ...state,
        ingredients: action.data,
        ingredientsLoading: true,
      };
    }
    case SELECTION_STARTED: {
      return {
        ...state,
        selectionStarted: true,
      };
    }
    case SELECTION_STOPPPED: {
      return {
        ...state,
        selectionStarted: false,
      };
    }
    default: {
      return state;
    }
  }
};
