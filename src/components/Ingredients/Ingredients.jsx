import React from 'react';
import './Ingredients.css';
import IngredientsList from '../IngredientsList/IngredientsList';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ingredients">
        <div className="ingredients__container">
          <h2 className="subtitle text text_type_main-medium">Булки</h2>
          <IngredientsList data={this.props.data} type="bun" />
          <h2 className="subtitle text text_type_main-medium">Соусы</h2>
          <IngredientsList data={this.props.data} type="sauce" />
          <h2 className="subtitle text text_type_main-medium">Начинки</h2>
          <IngredientsList data={this.props.data} type="main" />
        </div>
      </div>
    )
  };
}

export default Ingredients;
