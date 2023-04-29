import { ICountItems, IIngredientData, IIngredientCount } from "../utils/types";

export const useSort = (
  orderData: Array<string>,
  ingredients: Array<IIngredientData>,
  reverse: boolean
) => {
  const countItems: ICountItems = {};

  for (const item of orderData) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }

  const orderIngredients: Array<IIngredientData & IIngredientCount> =
    ingredients.reduce(
      (
        prevValue: Array<IIngredientData & IIngredientCount>,
        item: IIngredientData
      ) => {
        for (const key in countItems) {
          if (key === item._id) {
            prevValue.push({ ...item, count: countItems[key] });
          }
        }

        return prevValue;
      },
      []
    );

  const orderPrice = orderIngredients.reduce(
    (prevValue: number, item: IIngredientData & IIngredientCount) =>
      prevValue + item.price * item.count,
    0
  );

  if (reverse) {
    const orderIngredientsReverse = orderIngredients.reverse();
    return { orderIngredientsReverse, orderPrice };
  }

  return { orderIngredients, orderPrice };
};
