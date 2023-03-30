import {
  SET_ID,
  SET_ORDER_NUMBER,
  HIDE_ORDER_MODAL,
  SET_ORDER_LOAD,
  UNSET_ORDER_LOAD,
} from "../actions/orderDetails";

const initialState = {
  ingredientsId: null,
  orderNumber: null,
  orderDetailsOpen: false,
  orderDetailsLoading: false,
};

export const orderDetails = (state = initialState, action) => {
  switch (action.type) {
    case SET_ID: {
      return {
        ...state,
        ingredientsId: action.ingredientsId,
      };
    }
    case SET_ORDER_NUMBER: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderDetailsOpen: true,
      };
    }
    case HIDE_ORDER_MODAL: {
      return {
        ...state,
        orderDetailsOpen: false,
      };
    }
    case SET_ORDER_LOAD: {
      return {
        ...state,
        orderDetailsLoading: true,
      };
    }
    case UNSET_ORDER_LOAD: {
      return {
        ...state,
        orderDetailsLoading: false,
      };
    }
    default: {
      return state;
    }
  }
};
