import { ICountItems, IIngredientData } from "../utils/types";

export const useSort = (orderData: Array<string>, ingredients: Array<IIngredientData>, reverse: boolean) => {
  const countItems: ICountItems = {};

  for (const item of orderData) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }

  const orderIngredients: Array<IIngredientData> = ingredients.reduce((prevValue: Array<IIngredientData>, item: IIngredientData) => {
    for (const key in countItems) {
      if (key === item._id) {
        prevValue.push({ ...item, count: countItems[key] });
      }
    }

    return prevValue;
  }, []);

  const orderPrice = orderIngredients.reduce(
    (prevValue: number, item: IIngredientData) => prevValue + item.price * (item.count ?? 1),
    0
  );

  if (reverse) {
    const orderIngredientsReverse = orderIngredients.reverse();
    return { orderIngredientsReverse, orderPrice };
  }

  return { orderIngredients, orderPrice };
};
