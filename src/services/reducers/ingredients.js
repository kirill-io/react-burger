import { GET_INGREDIENT_SUCCESS } from "../actions/getIngredients";

const initialState = {
  ingredients: [],
  ingredientsLoading: false,
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENT_SUCCESS: {
      return {
        ingredients: action.data,
        ingredientsLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};
