import React from 'react';
import IngredientsList from '../IngredientsList/IngredientsList';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2 className="subtitle text text_type_main-medium">Булки</h2>
        <IngredientsList data={this.props.data} type="bun"/>
        <h2 className="subtitle text text_type_main-medium">Соусы</h2>
        <IngredientsList data={this.props.data} type="sauce"/>
        <h2 className="subtitle text text_type_main-medium">Начинки</h2>
        <IngredientsList data={this.props.data} type="main"/>
      </>
    )
  };
}

export default Ingredients;
