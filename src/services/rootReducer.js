import { combineReducers } from "redux";
import { ingredients } from "./reducers/ingredients";
import { burgerConstructor } from "./reducers/burgerConstructor";
import { orderDetails } from "./reducers/orderDetails";
import { login } from "./reducers/login";
import { wsReducer } from './reducers/wsReducer';

export const rootReducer = combineReducers({
  ingredients,
  burgerConstructor,
  orderDetails,
  login,
  data: wsReducer
});
