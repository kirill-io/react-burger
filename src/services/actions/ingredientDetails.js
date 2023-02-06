export const ADDING_DATA = 'ADDING_DATA';
export const DELETE_DATA = 'DELETE DATA';

export const setDataIngredient = (data) => (dispatch) => {
  if (data) {
    dispatch({
      type: ADDING_DATA,
      ingredient: data,
      ingredientDetailsOpen: true
    });
  } else {
    dispatch({
      type: DELETE_DATA,
      ingredient: null,
      ingredientDetailsOpen: false
    });
  }
};
