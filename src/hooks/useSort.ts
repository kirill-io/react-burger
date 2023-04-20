import { ICountItems, IIngredient } from "../utils/types";

export const useSort = (orderData: Array<string>, ingredients: Array<IIngredient>, reverse: boolean) => {
  const countItems: ICountItems = {};

  for (const item of orderData) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }

  const orderIngredients: Array<IIngredient> = ingredients.reduce((prevValue: Array<IIngredient>, item: IIngredient) => {
    for (const key in countItems) {
      if (key === item._id) {
        prevValue.push({ ...item, count: countItems[key] });
      }
    }

    return prevValue;
  }, []);

  const orderPrice = orderIngredients.reduce(
    (prevValue: number, item: IIngredient) => prevValue + item.price * (item?.count ?? 1),
    0
  );

  if (reverse) {
    const orderIngredientsReverse = orderIngredients.reverse();
    return { orderIngredientsReverse, orderPrice };
  }

  return { orderIngredients, orderPrice };
};
