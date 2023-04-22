import { AppDispatch } from "../types";
import { request } from "../../utils/burger-api";
import { getCookie, setCookie, deleteBearer } from "../../utils/cookies";

export const GET_LOGIN: "GET_LOGIN" = "GET_LOGIN";
export const UPDATE_NAME: "UPDATE_NAME" = "UPDATE_NAME";
export const UPDATE_LOGIN: "UPDATE_LOGIN" = "UPDATE_LOGIN";

export interface IGetLogin {
  readonly type: typeof GET_LOGIN;
  email: string;
  name: string;
}

export interface IUpdateName {
  readonly type: typeof UPDATE_NAME;
  name: string;
}

export interface IUpdateLogin {
  readonly type: typeof UPDATE_LOGIN;
  email: string;
}

export type TLoginActions =
 | IGetLogin
 | IUpdateName
 | IUpdateLogin;


export const getLogin = (email: string, name: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: GET_LOGIN,
    email: email,
    name: name,
  });
};

export const singIn = (email: string, password: string) => (dispatch: AppDispatch) => {
  return request("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  }).then((res: any) => {
    setCookie("accessToken", deleteBearer(res.accessToken), 20);
    setCookie("refreshToken", res.refreshToken);
    setCookie("isAuthenticated", "true");
    dispatch(getLogin(res.user.email, res.user.name));
  });
};

export const resetPassword = (password: string, code: string) => (dispatch: AppDispatch) => {
  return request("/password-reset/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  }).then(() => {
    setCookie("forgotPassword", "false", -1);
  });
};

export const forgotPassword = (email: string) => (dispatch: AppDispatch) => {
  return request("/password-reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
    }),
  }).then(() => {
    setCookie("forgotPassword", "true");
  });
};

export const singOut = () => (dispatch: AppDispatch) => {
  return request("/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: getCookie("refreshToken"),
    }),
  }).then(() => {
    setCookie("accessToken", "", -1);
    setCookie("refreshToken", "", -1);
    setCookie("isAuthenticated", "", -1);
  });
};

export const updateName = (name: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: UPDATE_NAME,
    name: name,
  });
};

export const updateLogin = (login: string) => (dispatch: AppDispatch) => {
  dispatch({
    type: UPDATE_LOGIN,
    email: login,
  });
};
