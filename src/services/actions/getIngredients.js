import { getIngredientsRequest } from "../../utils/burger-api";

export const GET_INGREDIENT_SUCCESS = 'GET_INGREDIENT_SUCCESS';
export const SET_INGREDIENT_LOADING = 'SET_INGREDIENT_LOADING';

export const getIngredients = () => (dispatch) => {
  getIngredientsRequest()
    .then((res) => {
      dispatch({
        type: GET_INGREDIENT_SUCCESS,
        data: res
      });
    })
    .catch(() => alert("Во время загрузки ингредиентов произошла ошибка."));
};
