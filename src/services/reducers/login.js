import { GET_REGISTRATION } from "../actions/getRegistration";
import { GET_AUTHORIZATION } from "../actions/getAuthorization";

const initialState = {
  email: '',
  name: ''
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGISTRATION: {
      return {
        email: action.email,
        name: action.name,
      };
    }
    case GET_AUTHORIZATION: {
      return {
        email: action.email,
        name: action.name,
      };
    }
    default: {
      return state;
    }
  }
};
