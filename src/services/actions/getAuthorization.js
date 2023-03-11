export const GET_AUTHORIZATION = "GET_AUTHORIZATION";

export const getAuthorization = (email, name) => (dispatch) => {
  dispatch({
    type: GET_AUTHORIZATION,
    email: email,
    name: name
  });
};
