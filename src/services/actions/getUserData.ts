import { store } from "../../index";
import { AppDispatch } from "../types";

import {
  getUserDataRequest,
  updateUserDataRequest,
} from "../../utils/burger-api";

export const GET_USER_DATA: "GET_USER_DATA" = "GET_USER_DATA";
export const UPDATE_USER_DATA: "UPDATE_USER_DATA" = "UPDATE_USER_DATA";

export interface IGetUserData {
  readonly type: typeof GET_USER_DATA;
  email: string;
  name: string;
}

export interface IUpdateUserData {
  readonly type: typeof UPDATE_USER_DATA;
  email: string;
  name: string;
}

export type TGetUserDataActions = IGetUserData | IUpdateUserData;

export const getUserData = () => (dispatch: AppDispatch) => {
  getUserDataRequest()
    .then((res: any) => {
      dispatch({
        type: GET_USER_DATA,
        email: res.user.email,
        name: res.user.name,
      });
    })
    .catch(() =>
      alert("При получении данных о пользователе произошла ошибка.")
    );
};

export const updateUserData = () => (dispatch: AppDispatch) => {
  updateUserDataRequest(
    store.getState().login.email,
    store.getState().login.name
  )
    .then((res: any) => {
      dispatch({
        type: UPDATE_USER_DATA,
        email: res.user.email,
        name: res.user.name,
      });
    })
    .catch(() =>
      alert("При обновлении данных о пользователе произошла ошибка.")
    );
};
