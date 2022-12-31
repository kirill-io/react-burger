import React from 'react';
import './Menu.css';
import Link from '../Link/Link';


class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item mr-2">
            <Link tag="BurgerIcon" type="primary" typeText="text text_type_main-default">Конструктор</Link>
          </li>
          <li className="menu__item">
            <Link tag="ListIcon" type="secondary" typeText="text text_type_main-default text_color_inactive">Лента заказов</Link>
          </li>
        </ul>
      </nav>
    )
  };
}

export default Menu;
