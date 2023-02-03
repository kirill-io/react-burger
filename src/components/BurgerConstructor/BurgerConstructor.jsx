import React from "react";
import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import { IngredientsContext } from "../../services/ingredientsContext";
import { ConstructorItem } from "../ConstructorItem/ConstructorItem";
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorOrder = ({ totalPrice, onOpen }) => {
  return (
    <div className={styles.constructor__order + " mr-4"}>
      <div className={styles.constructor__price}>
        <span className="text text_type_digits-medium">{totalPrice}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
    </div>
  );
};

ConstructorOrder.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export const BurgerConstructor = ({ setIngredientsId, onOpen }) => {

  const data = React.useContext(IngredientsContext);

  const selectedIngredients = [{
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
  },
  {
    "_id": "60d3b41abdacab0026a733cc",
    "name": "Соус Spicy-X",
    "type": "sauce",
    "proteins": 30,
    "fat": 20,
    "carbohydrates": 40,
    "calories": 30,
    "price": 90,
    "image": "https://code.s3.yandex.net/react/code/sauce-02.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/sauce-02-large.png",
    "__v": 0
  },
  {
    "_id": "60d3b41abdacab0026a733c8",
    "name": "Филе Люминесцентного тетраодонтимформа",
    "type": "main",
    "proteins": 44,
    "fat": 26,
    "carbohydrates": 85,
    "calories": 643,
    "price": 988,
    "image": "https://code.s3.yandex.net/react/code/meat-03.png",
    "image_mobile": "https://code.s3.yandex.net/react/code/meat-03-mobile.png",
    "image_large": "https://code.s3.yandex.net/react/code/meat-03-large.png",
    "__v": 0
  }
  ];

  const bun = selectedIngredients.find((item) => item.type === "bun");

  const ingredients = selectedIngredients.filter((item) => item.type !== "bun");

  const totalPrice = React.useMemo(
    () =>
      bun.price * 2 + ingredients.reduce((acc, item) => (acc += item.price), 0),
    [bun, ingredients]
  );

  // const ingredientsId = React.useMemo(() => {
  //   selectedIngredients.map((item) => item._id);
  // }, [selectedIngredients]);

  const ingredientsId = selectedIngredients.map((item) => item._id);

  React.useEffect(() => {
    setIngredientsId(ingredientsId);
  }, []);

  return (
    <section className={styles.constructor__container + " pt-25 pl-4"}>
      <ul className={styles.constructor__list + " mb-10"}>
        <ConstructorItem
          type="top"
          isLocked={true}
          text=" (верх)"
          data={bun}
          noIcon={true}
        />
        <li className={styles.constructor__item_center}>
          <ul className={styles.list}>
            {ingredients.map((item) => {
              return <ConstructorItem data={item} key={item._id} />;
            })}
          </ul>
        </li>
        <ConstructorItem
          type="bottom"
          isLocked={true}
          text=" (низ)"
          data={bun}
          noIcon={true}
        />
      </ul>
      <ConstructorOrder totalPrice={totalPrice} onOpen={onOpen} />
    </section>
  );
};

BurgerConstructor.propTypes = {
  setIngredientsId: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired
};
