import { GET_LOGIN, UPDATE_NAME, UPDATE_LOGIN } from "../actions/login";
import { GET_USER_DATA, UPDATE_USER_DATA } from "../actions/getUserData";
import { ENTRY_ORDER_PAGE, EXIT_ORDER_PAGE } from "../actions/orderPage";

const initialState = {
  email: "",
  name: "",
  clickOrderPage: false,
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN: {
      return {
        ...state,
        email: action.email,
        name: action.name,
      };
    }
    case GET_USER_DATA: {
      return {
        ...state,
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
        ...state,
        email: action.email,
        name: action.name,
      };
    }
    case ENTRY_ORDER_PAGE: {
      return {
        ...state,
        clickOrderPage: true,
      };
    }
    case EXIT_ORDER_PAGE: {
      return {
        ...state,
        clickOrderPage: false,
      };
    }
    default: {
      return state;
    }
  }
};
