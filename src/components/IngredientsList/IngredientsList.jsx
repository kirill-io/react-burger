import React from 'react';
import './IngredientsList.css';
import IngredientItem from '../IngredientItem/IngredientItem';

class IngredientsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="ingredients__list pt-6 pl-4">
        {this.props.data.map((item) => {
          if (item.type === this.props.type) {
            return (
              <IngredientItem data={item} key={item._id} />
            )
          }
        })}
      </ul>
    )
  };
}

export default IngredientsList;
