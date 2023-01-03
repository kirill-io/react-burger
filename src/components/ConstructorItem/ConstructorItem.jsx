import React from 'react';
import './ConstructorItem.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

class ConstructorItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="burger-constructor__item">
        <a href="#" className="burger-constructor__link">
          <DragIcon type="primary" />
        </a>
        <ConstructorElement type={this.props.type} isLocked={this.props.isLocked} text={this.props.text ? (this.props.data.name + this.props.text) : (this.props.data.name)} price={this.props.data.price} thumbnail={this.props.data.image} />
      </li>
    )
  }
}

export default ConstructorItem;
