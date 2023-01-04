import React from 'react';
import PropTypes from 'prop-types';
import './BurgerConstructor.css';
import ConstructorItem from '../ConstructorItem/ConstructorItem';
import ConstructorOrder from '../ConstructorOrder/ConstructorOrder';

class BurgerConstructor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="burger-constructor__container pt-25 pl-4">
        <ul className="burger-constructor__list mb-10">
          {this.props.data.map((item) => {
            if ((Number(item.amount) >= 1) && (item.type === 'bun')) {
              return (
                <ConstructorItem typeClass="bun" type="top" isLocked={true} text=" (верх)" data={item} key={item._id} />
              )
            }
          })}

          <li className="burger-constructor__item burger-constructor__item_center">
            <ul className="constructor__list">
              {this.props.data.map((item, i) => {
                if (Number((item.amount) >= 1) && (item.type !== 'bun')) {
                  return (
                    <ConstructorItem data={item} key={item._id + i} />
                  )
                }
              })}
            </ul>
          </li>

          {this.props.data.map((item) => {
            if ((Number(item.amount) >= 1) && (item.type === 'bun')) {
              return (
                <ConstructorItem typeClass="bun" type="bottom" isLocked={true} text=" (низ)" data={item} key={item._id + 1} />
              )
            }
          })}
        </ul>
        <ConstructorOrder data={this.props.data}/>
      </div>
    )
  }
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any)
}

export default BurgerConstructor;
