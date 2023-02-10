import { combineReducers } from "redux";
import { ingredients } from "./reducers/ingredients";
import { burgerConstructor } from "./reducers/burgerConstructor";
import { ingredientDetails } from "./reducers/ingredientDetails";
import { orderDetails } from "./reducers/orderDetails";

export const rootReducer = combineReducers({
  ingredients,
  burgerConstructor,
  ingredientDetails,
  orderDetails,
});
