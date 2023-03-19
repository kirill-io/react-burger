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
