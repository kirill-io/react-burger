import { request } from "../../utils/burger-api";
import { getCookie } from "../../utils/cookies";

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

export const singIn = (email, password) => {
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
  );
};

export const resetPassword = (password, code) => {
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
  );
};

export const forgotPassword = (email) => {
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
  );
};

export const singOut = () => {
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
