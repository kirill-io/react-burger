import {
  ADDING_INGREDIENT,
  REPLACEMENT_INGREDIENT,
  DELETE_INGREDIENT
} from '../actions/burgerConstructor';

const initialState = [{
  "_id": "60d3b41abdacab0026a733c6",
  "name": "Краторная булка N-200i",
  "type": "bun",
  "proteins": 80,
  "fat": 24,
  "carbohydrates": 53,
  "calories": 420,
  "price": 1255,
  "image": "https://code.s3.yandex.net/react/code/bun-02.png",
  "image_mobile": "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
  "image_large": "https://code.s3.yandex.net/react/code/bun-02-large.png",
  "__v": 0
}];

export const burgerConstructor = (state = initialState, action) => {
  switch (action.type) {
    case ADDING_INGREDIENT: {
      return [
        ...state,
        action.ingredient
      ];
    }
    case REPLACEMENT_INGREDIENT: {
      state[0] = action.ingredient
      return [
        ...state
      ];
    }
    case DELETE_INGREDIENT: {
      state.splice(action.index, 1);
      return [
        ...state
      ];
    }
    default: {
      return state;
    }
  }
}
