import update from "immutability-helper";
import {
  ADDING_INGREDIENT,
  REPLACEMENT_INGREDIENT,
  MOVE_INGREDIENT,
  DELETE_INGREDIENT,
  CLEAN_INGREDIENT,
} from "../actions/burgerConstructor";
import { IIngredientData } from "../../utils/types";
import { TBurgerConstructorActions } from "../actions/burgerConstructor";

type TBurgerConstructorState = ReadonlyArray<IIngredientData>;

const initialState: TBurgerConstructorState = [
  {
    _id: "60d3b41abdacab0026a733c6",
    name: "Краторная булка N-200i",
    type: "bun",
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
    calories: 420,
    price: 1255,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    __v: 0,
  },
];

export const burgerConstructor = (state = initialState, action: TBurgerConstructorActions): TBurgerConstructorState => {
  switch (action.type) {
    case ADDING_INGREDIENT: {
      return [...state, { ...action.ingredient, key: action.key }];
    }
    case REPLACEMENT_INGREDIENT: {
      return [action.ingredient, ...state.slice(1)];
    }
    case MOVE_INGREDIENT: {
      return update(state, {
        $splice: [
          [action.dragIndex + 1, 1],
          [action.hoverIndex + 1, 0, state[action.dragIndex + 1]],
        ],
      });
    }
    case DELETE_INGREDIENT: {
      return [
        ...state.filter((item) => {
          return item.key !== action.elementKey;
        }),
      ];
    }
    case CLEAN_INGREDIENT: {
      return [...initialState];
    }
    default: {
      return state;
    }
  }
};
