import React from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredients.css';
import TabList from '../TabList/TabList';
import Ingredients from '../Ingredients/Ingredients';

class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="burger-ingredients__container pt-10">
        <h1 className="title text text_type_main-large mb-5">Соберите бургер</h1>
        <TabList />
        <Ingredients data={this.props.data} />
      </div>
    )
  };
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any)
}

export default BurgerIngredients;
