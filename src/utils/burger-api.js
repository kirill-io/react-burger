import { getCookie, setCookie, deleteBearer } from "./cookies";

const BURGER_API_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (res) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};

export const getIngredientsRequest = () => {
  return fetch(`${BURGER_API_URL}/ingredients`)
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
};

export const getOrderNumberRequest = async (ingredientsId) => {
  let accessToken;

  if (!getCookie('accessToken')) {
    await getRefreshTokenRequest(getCookie('refreshToken'))
      .then((res) => {
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie('accessToken');
  }

  return fetch(`${BURGER_API_URL}/orders`, {
    method: "POST",
    headers: {
      "authorization": "Bearer " + accessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ingredients: ingredientsId,
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data.order.number;
      return Promise.reject(data);
    });
};

export const getForgotPasswordRequest = (email) => {
  return fetch(`${BURGER_API_URL}/password-reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getResetPasswordRequest = (password, token) => {
  return fetch(`${BURGER_API_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "password": `${password}`,
      "token": `${token}`
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getRegistrationRequest = (email, password, name) => {
  return fetch(`${BURGER_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`,
      "name": `${name}`
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getAuthorizationRequest = (email, password) => {
  return fetch(`${BURGER_API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getRefreshTokenRequest = (refreshToken) => {
  return fetch(`${BURGER_API_URL}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "token": `${refreshToken}`
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) {
        setCookie('accessToken', deleteBearer(data.accessToken), 20);
        setCookie('refreshToken', data.refreshToken);
        return data;
      }
      return Promise.reject(data);
    })
};

export const getSingOutRequest = (refreshToken) => {
  return fetch(`${BURGER_API_URL}/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "token": `${refreshToken}`
    }),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getUserDataRequest = async () => {
  let accessToken;

  if (!getCookie('accessToken')) {
    await getRefreshTokenRequest(getCookie('refreshToken'))
      .then((res) => {
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie('accessToken');
  }

  return fetch(`${BURGER_API_URL}/auth/user`, {
        method: "GET",
        headers: {
          "authorization": "Bearer " + accessToken
        }
      })
        .then(checkResponse)
        .then((data) => {
          if (data?.success) return data;
          return Promise.reject(data);
        });
};

export const updateUserDataRequest = async (email, name) => {
  let accessToken;

  if (!getCookie('accessToken')) {
    await getRefreshTokenRequest(getCookie('refreshToken'))
      .then((res) => {
        accessToken = deleteBearer(res.accessToken);
      })
      .catch(() => alert("При обновления токена произошла ошибка."));
  } else {
    accessToken = getCookie('accessToken');
  }

  return fetch(`${BURGER_API_URL}/auth/user`, {
        method: "PATCH",
        headers: {
          "authorization": "Bearer " + accessToken,
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          "email": `${email}`,
          "name": `${name}`,
          "password": "toyota"
         }),
      })
        .then(checkResponse)
        .then((data) => {
          if (data?.success) return data;
          return Promise.reject(data);
        });
};
