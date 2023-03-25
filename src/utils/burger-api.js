import { getCookie, setCookie, deleteBearer } from "./cookies";

const BURGER_API_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};

const checkSuccess = (res) => {
  if (res && res.success) {
    return res;
  }

  return Promise.reject(`Ответ не success: ${res}`);
};

export const request = (endpoint, options) => {
  return fetch(`${BURGER_API_URL}${endpoint}`, options)
    .then(checkResponse)
    .then(checkSuccess);
};

const getRefreshTokenRequest = (refreshToken) => {
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

export const getOrderNumberRequest = async (ingredientsId) => {
  let accessToken;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
      .then((res) => {
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

export const getUserDataRequest = async () => {
  let accessToken;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
    .then((res) => {
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

export const updateUserDataRequest = async (email, name) => {
  let accessToken;

  if (!getCookie("accessToken")) {
    await getRefreshTokenRequest(getCookie("refreshToken"))
    .then((res) => {
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
