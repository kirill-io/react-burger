import React from 'react';
import './AppHeader.css';
import Menu from '../Menu/Menu';
import { Logo } from '@ya.praktikum/react-developer-burger-ui-components';
import Link from '../Link/Link';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="header pt-4 pb-4">
        <div className='header-container'>
          <div className="header__menu">
            <Menu />
          </div>
          <div className="header__logo">
            <Logo />
          </div>
          <Link tag="ProfileIcon" type="secondary" typeText="text text_type_main-default text_color_inactive">Личный кабинет</Link>
        </div>
      </header>
    )
  };
}

export default AppHeader;
