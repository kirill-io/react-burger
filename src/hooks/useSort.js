export const useSort = (orderData, ingredients, reverse) => {
  const countItems = {};

  for (const item of orderData) {
    countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }

  const orderIngredients = ingredients.reduce((prevValue, item) => {
    for (const key in countItems) {
      if (key === item._id) {
        prevValue.push({ ...item, count: countItems[key] });
      }
    }

    return prevValue;
  }, []);

  const orderPrice = orderIngredients.reduce(
    (prevValue, item) => prevValue + item.price * item.count,
    0
  );

  if (reverse) {
    const orderIngredientsReverse = orderIngredients.reverse();
    return { orderIngredientsReverse, orderPrice };
  }

  return { orderIngredients, orderPrice };
};
