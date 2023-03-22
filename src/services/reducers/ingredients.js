import {
  GET_INGREDIENT_SUCCESS,
  SELECTION_STARTED,
  SELECTION_STOPPPED,
} from "../actions/getIngredients";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
  selectionStarted: false,
};

export const ingredients = (state = initialState, action) => {
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
