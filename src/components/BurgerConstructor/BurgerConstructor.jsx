import PropTypes from "prop-types";
import styles from "./BurgerConstructor.module.css";
import { ConstructorItem } from '../ConstructorItem/ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const ConstructorOrder = ({ data, onOpen }) => {
  const calculationPrice = (dataForCalculation) => {
    const searchBun = dataForCalculation.find((item => {
      if (item.type === 'bun' && item.amount >= 1) {
        return item;
      }
      return item;
    }))

    const priceIngredients = dataForCalculation.reduce((prevValue, item) => {
      if (item.type !== 'bun' && item.amount >= 1) {
        return prevValue + item.price * item.amount;
      }
      return prevValue;
    }, 0);

    return searchBun.price * 2 + priceIngredients;
  }

  return (
    <div className={styles.constructor__order + " mr-4"}>
      <div className={styles.constructor__price}>
      <span className="text text_type_digits-medium">{calculationPrice(data)}</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large" onClick={onOpen}>
        Оформить заказ
      </Button>
    </div>
  );
};

ConstructorOrder.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  }).isRequired).isRequired,
};

export const BurgerConstructor = ({ data, onOpen }) => {
  const ingredients = data.filter(
    (item) => Number(item.amount >= 1) && item.type !== "bun"
  );
  const bun = data.find(
    (item) => Number(item.amount) >= 1 && item.type === "bun"
  );

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
      <ConstructorOrder data={data} onOpen={onOpen}/>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    amount: PropTypes.number.isRequired,
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired
  }).isRequired).isRequired,
};
