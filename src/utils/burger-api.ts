import { getCookie, setCookie, deleteBearer } from "./cookies";

export const WS_URL_ORDERS_ALL = "wss://norma.nomoreparties.space/orders/all";
export const WS_URL_ORDERS_USER = "wss://norma.nomoreparties.space/orders";
const BURGER_API_URL = "https://norma.nomoreparties.space/api";

type TPromise = Promise<object | string>;

const checkResponse = (res: any): TPromise => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res: any): TPromise => {
  if (res && res.success) {
    return res;
  }

  return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint: string, options?: any): TPromise => {
  return fetch(`${BURGER_API_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

export const getRefreshTokenRequest = (refreshToken: string | undefined): TPromise => {
  return request("/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: `${refreshToken}`,
    }),
  });
};

export const getOrderNumberRequest = async (ingredientsId: Array<string>): TPromise => {
  let accessToken;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
      .then((res: any) => {
        setCookie("accessToken", deleteBearer(res.accessToken), 20);
        setCookie("refreshToken", res.refreshToken);
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie("accessToken");
  }

  return request("/orders", {
    method: "POST",
    headers: {
      authorization: "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredientsId,
    }),
  });
};

export const getUserDataRequest = async (): TPromise => {
  let accessToken;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
      .then((res: any) => {
        setCookie("accessToken", deleteBearer(res.accessToken), 20);
        setCookie("refreshToken", res.refreshToken);
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie("accessToken");
  }

  return request("/auth/user", {
    method: "GET",
    headers: {
      authorization: "Bearer " + accessToken,
    },
  });
};

export const updateUserDataRequest = async (email: string, name: string): TPromise => {
  let accessToken;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
      .then((res: any) => {
        setCookie("accessToken", deleteBearer(res.accessToken), 20);
        setCookie("refreshToken", res.refreshToken);
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie("accessToken");
  }

  return request("/auth/user", {
    method: "PATCH",
    headers: {
      authorization: "Bearer " + accessToken,
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      email: `${email}`,
      name: `${name}`,
      password: "toyota",
    }),
  });
};
