export const ADDING_INGREDIENT = 'ADDING_INGREDIENT';
export const REPLACEMENT_INGREDIENT = 'REPLACEMENT_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const addingIngredient = (type, ingredient) => (dispatch) => {
  if (type === 'bun') {
    dispatch({
      type: REPLACEMENT_INGREDIENT,
      ingredient: ingredient
    });
  } else {
    dispatch({
      type: ADDING_INGREDIENT,
      ingredient: ingredient
    });
  }
};

export const deleteIngredient = (index) => (dispatch) => {
  dispatch({
    type: DELETE_INGREDIENT,
    index: index
  });
};
