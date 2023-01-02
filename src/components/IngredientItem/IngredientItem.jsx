import React from 'react';
import './IngredientItem.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';


class IngredientItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className='ingredient__item'>
        <div className="ingredient__container pr-4 pl-4">
          <img className='ingredient__image mb-2' src={this.props.data.image} alt={this.props.data.name} />
          <div className="ingredient__price mb-2">
            <span className="ingredient__price-value text text_type_digits-default">{this.props.data.price}</span>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <p className="ingredient__name text text_type_main-default">{this.props.data.name}</p>
        {Number(this.props.data.amount) ? (
          <Counter count={this.props.data.amount} size="default" extraClass="m-1" />
        ) : null}
      </li>
    )
  };
}

export default IngredientItem;
