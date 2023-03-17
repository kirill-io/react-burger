import { store } from "../../index";

import {
  getUserDataRequest,
  updateUserDataRequest
} from "../../utils/burger-api";

export const GET_USER_DATA = "GET_USER_DATA";
export const UPDATE_USER_DATA = "UPDATE_USER_DATA";

export const getUserData = () => (dispatch) => {
  getUserDataRequest()
    .then((res) => {
      dispatch({
        type: GET_USER_DATA,
        email: res.user.email,
        name: res.user.name
      });
    })
    .catch(() => alert("При получении данных о пользователе произошла ошибка."));
};

export const updateUserData = () => (dispatch) => {
  updateUserDataRequest(store.getState().login.email, store.getState().login.name)
    .then((res) => {
      dispatch({
        type: UPDATE_USER_DATA,
        email: res.user.email,
        name: res.user.name
      });
    })
    .catch(() => alert("При обновлении данных о пользователе произошла ошибка."));
};
