import React from 'react';
import './ConstructorOrder.css';
import ConstructorPrice from '../ConstructorPrice/ConstructorPrice';
import { CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'

class ConstructorOrder extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="burger-constructor__order">
        <div className="burger-constructor__price">
          <ConstructorPrice data={this.props.data} />
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">Оформить заказ</Button>
      </div>
    )
  }
}

export default ConstructorOrder;
