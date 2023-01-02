import React from 'react';
import './App.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import { data } from '../../utils/data';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <AppHeader/>
        <main className="content">
          <div className="container">
            <BurgerIngredients data={data}/>
            {/* <BurgerConstructor /> */}
          </div>
        </main>
      </>
    );
  }
}

export default App;
