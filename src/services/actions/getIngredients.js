import { request } from "../../utils/burger-api";

export const GET_INGREDIENT_SUCCESS = "GET_INGREDIENT_SUCCESS";
export const SELECTION_STARTED = "SELECTION_STARTED";
export const SELECTION_STOPPPED = "SELECTION_STOPPPED";

export const getIngredients = () => (dispatch) => {
  request("/ingredients")
    .then((res) => {
      dispatch({
        type: GET_INGREDIENT_SUCCESS,
        data: res.data,
      });
    })
    .catch(() => alert("Во время загрузки ингредиентов произошла ошибка."));
};

export const selectionStart = () => (dispatch) => {
  dispatch({
    type: SELECTION_STARTED,
  });
};

export const selectionStop = () => (dispatch) => {
  dispatch({
    type: SELECTION_STOPPPED,
  });
};
