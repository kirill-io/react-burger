import React from 'react';

class ConstructorPrice extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const sum = this.props.data.reduce((prevValue, currentValue) => {
      return prevValue + currentValue.price * currentValue.amount;
    }, 0);
    return (
      <span className="burger-constructor__price-sum text text_type_digits-medium">{sum}</span>
    )
  }
}

export default ConstructorPrice;
