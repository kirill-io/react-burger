import {
  ADDING_DATA,
  DELETE_DATA
} from '../actions/ingredientDetails';

const initialState = {
  ingredient: null,
  ingredientDetailsOpen: false
};

export const ingredientDetails = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_DATA: {
      return {
        ingredient: action.ingredient,
        ingredientDetailsOpen: true
      };
    }
    case DELETE_DATA: {
      return {
        ingredient: null,
        ingredientDetailsOpen: false
      };
    }
    default:{
      return state;
    }
  }
};
