import React from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerConstructor.module.css';
import { DragIcon, ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorItem = ({ type, isLocked, text, data }) => {
  return (
    <li className={styles.constructor__item}>
      <a href="#">
        <DragIcon type="primary" />
      </a>
      <ConstructorElement type={type} isLocked={isLocked} text={text ? (data.name + text) : (data.name)} price={data.price} thumbnail={data.image} />
    </li>
  )
}

const ConstructorOrder = ({ data }) => {
  return (
    <div className={styles.constructor__order + ' mr-4'}>
      <div className={styles.constructor__price}>
        <ConstructorPrice data={data} />
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
    </div>
  )
}

const ConstructorPrice = ({ data }) => {
  const sum = data.reduce((prevValue, currentValue) => {
    return prevValue + currentValue.price * currentValue.amount;
  }, 0);
  return (
    <span className="text text_type_digits-medium">{sum}</span>
  )
}

export const BurgerConstructor = ({ data }) => {
  return (
    <div className={styles.constructor__container + ' pt-25 pl-4'}>
      <ul className={styles.constructor__list + ' mb-10'}>
        {data.map((item) => {
          if ((Number(item.amount) >= 1) && (item.type === 'bun')) {
            return (
              <ConstructorItem type="top" isLocked={true} text=" (верх)" data={item} key={item._id} />
            )
          }
        })}
        <li className={styles.constructor__item_center}>
          <ul className={styles.list}>
            {data.map((item, i) => {
              if (Number((item.amount) >= 1) && (item.type !== 'bun')) {
                return (
                  <ConstructorItem data={item} key={item._id + i} />
                )
              }
            })}
          </ul>
        </li>
        {data.map((item) => {
          if ((Number(item.amount) >= 1) && (item.type === 'bun')) {
            return (
              <ConstructorItem type="bottom" isLocked={true} text=" (низ)" data={item} key={item._id + 1} />
            )
          }
        })}
      </ul>
      <ConstructorOrder data={data}/>
    </div>
  )
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any)
}
