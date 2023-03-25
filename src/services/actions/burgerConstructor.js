import uuid from "react-uuid";

export const ADDING_INGREDIENT = "ADDING_INGREDIENT";
export const REPLACEMENT_INGREDIENT = "REPLACEMENT_INGREDIENT";
export const MOVE_INGREDIENT = "MOVE_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const CLEAN_INGREDIENT = "CLEAN_INGREDIENT";

export const addingIngredient = (type, ingredient) => (dispatch) => {
  if (type === "bun") {
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

export const moveIngredient = (dragIndex, hoverIndex) => (dispatch) => {
  dispatch({
    type: MOVE_INGREDIENT,
    dragIndex: dragIndex,
    hoverIndex: hoverIndex,
  });
};

export const deleteIngredient = (elementKey) => (dispatch) => {
  dispatch({
    type: DELETE_INGREDIENT,
    elementKey: elementKey,
  });
};

export const cleanIngredient = () => (dispatch) => {
  dispatch({
    type: CLEAN_INGREDIENT,
  });
};
