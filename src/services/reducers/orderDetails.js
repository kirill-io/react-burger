import {
  SET_ID,
  SET_ORDER_NUMBER,
  HIDE_ORDER_MODAL,
} from "../actions/orderDetails";

const initialState = {
  ingredientsId: null,
  orderNumber: null,
  orderDetailsOpen: false,
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
    default: {
      return state;
    }
  }
};
