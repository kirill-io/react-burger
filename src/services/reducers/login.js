import { GET_LOGIN, UPDATE_NAME, UPDATE_LOGIN } from "../actions/login";
import { GET_USER_DATA, UPDATE_USER_DATA } from "../actions/getUserData";

const initialState = {
  email: "",
  name: "",
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN: {
      return {
        email: action.email,
        name: action.name,
      };
    }
    case GET_USER_DATA: {
      return {
        email: action.email,
        name: action.name,
      };
    }
    case UPDATE_NAME: {
      return {
        ...state,
        name: action.name,
      };
    }
    case UPDATE_LOGIN: {
      return {
        ...state,
        email: action.email,
      };
    }
    case UPDATE_USER_DATA: {
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
