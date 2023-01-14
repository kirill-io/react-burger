const NORMA_API = "https://norma.nomoreparties.space/api";

const checkResponse = res => {
  return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
};

export const getIngredients = (response, reject, completion) => {
  return fetch(`${NORMA_API}/ingredients`)
          .then(checkResponse)
          .then(data => response(data))
          .catch(err => reject())
          .finally(() => completion());
}
