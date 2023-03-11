export const GET_REGISTRATION = "GET_REGISTRATION";

export const getRegistration = (email, name) => (dispatch) => {
  dispatch({
    type: GET_REGISTRATION,
    email: email,
    name: name
  });
};
