import { request } from "../../utils/burger-api";
import { getCookie, setCookie, deleteBearer } from "../../utils/cookies";

export const GET_LOGIN = "GET_LOGIN";
export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_LOGIN = "UPDATE_LOGIN";

export const getLogin = (email, name) => (dispatch) => {
  dispatch({
    type: GET_LOGIN,
    email: email,
    name: name,
  });
};

export const singIn = (email, password) => (dispatch) => {
  return (
    request("/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
        password: `${password}`,
      })
    })
      .then((res) => {
        setCookie("accessToken", deleteBearer(res.accessToken), 20);
        setCookie("refreshToken", res.refreshToken);
        setCookie("isAuthenticated", "true");
        dispatch(getLogin(res.user.email, res.user.name));
      })
  );
};

export const resetPassword = (password, code) => (dispatch) => {
  return (
    request("/password-reset/reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password: `${password}`,
        token: `${code}`,
      }),
    })
      .then(() => {
        setCookie("forgotPassword", "false", -1);
      })
  );
};

export const forgotPassword = (email) => (dispatch) => {
  return (
    request("/password-reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: `${email}`,
      }),
    })
      .then(() => {
        setCookie("forgotPassword", "true");
      })
  );
};

export const singOut = () => (dispatch) => {
  return(
    request("/auth/logout", {
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
      })
  );
};

export const updateName = (name) => (dispatch) => {
  dispatch({
    type: UPDATE_NAME,
    name: name,
  });
};

export const updateLogin = (login) => (dispatch) => {
  dispatch({
    type: UPDATE_LOGIN,
    email: login,
  });
};
