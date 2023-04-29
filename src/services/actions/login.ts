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

export type TLoginActions = IGetLogin | IUpdateName | IUpdateLogin;

export const getLogin =
  (email: string, name: string) => (dispatch: AppDispatch) => {
    dispatch({
      type: GET_LOGIN,
      email: email,
      name: name,
    });
  };

export const singIn =
  (
    email: string,
    password: string,
    fromPage: string,
    navigate: (a: string, b: { replace: boolean }) => void
  ) =>
  (dispatch: AppDispatch) => {
    return request("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res: any) => {
        setCookie("accessToken", deleteBearer(res.accessToken), 20);
        setCookie("refreshToken", res.refreshToken);
        setCookie("isAuthenticated", "true");
        dispatch(getLogin(res.user.email, res.user.name));
        navigate(fromPage, { replace: true });
      })
      .catch(() => alert("При авторизации произошла ошибка."));
  };

export const resetPassword =
  (
    password: string,
    code: string,
    fromPage: string,
    navigate: (a: string, b: { replace: boolean; state: string }) => void
  ) =>
  (dispatch: AppDispatch) => {
    return request("/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    })
      .then(() => {
        setCookie("forgotPassword", "false", -1);
      })
      .then(() => navigate("/login", { replace: true, state: fromPage }))
      .catch(() => alert("При восстановлении пароля произошла ошибка."));
  };

export const forgotPassword =
  (
    email: string,
    fromPage: string,
    navigate: (a: string, b: { replace: boolean; state: string }) => void
  ) =>
  (dispatch: AppDispatch) => {
    return request("/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then(() => {
        setCookie("forgotPassword", "true");
        navigate("/reset-password", { replace: true, state: fromPage });
      })
      .catch(() => alert("При восстановлении пароля произошла ошибка."));
  };

export const singOut =
  (
    url: string,
    navigate: (
      a: string,
      b: { replace: boolean; state: { from: object } }
    ) => void,
    location: object
  ) =>
  (dispatch: AppDispatch) => {
    return request("/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: getCookie("refreshToken"),
      }),
    })
      .then(() => {
        setCookie("accessToken", "", -1);
        setCookie("refreshToken", "", -1);
        setCookie("isAuthenticated", "", -1);
        navigate(url, { replace: true, state: { from: location } });
      })
      .catch(() => alert("При выходе произошла ошибка."));
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
