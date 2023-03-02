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

export const getOrderNumberRequest = (ingredientsId) => {
  return fetch(`${BURGER_API_URL}/orders`, {
    method: "POST",
    headers: {
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

export const getForgotPassword = (email) => {
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

export const getResetPassword = (password, token) => {
  return fetch(`${BURGER_API_URL}/password-reset/reset`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "password": `${password}`,
      "token": `${token}`
    } ),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};

export const getRegister = (email, password, name) => {
  return fetch(`${BURGER_API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`,
      "name": `${name}`
    } ),
  })
    .then(checkResponse)
    .then((data) => {
      if (data?.success) return data;
      return Promise.reject(data);
    });
};
