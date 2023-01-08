import React from 'react';
import styles from './AppHeader.module.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

function Menu() {
  return (
    <nav className="menu">
      <ul className={styles.menu__list}>
        <li className="menu__item mr-2">
          <Link tag="BurgerIcon" type="primary" typeText="text text_type_main-default">Конструктор</Link>
        </li>
        <li className="menu__item">
          <Link tag="ListIcon" type="secondary" typeText="text text_type_main-default text_color_inactive">Лента заказов</Link>
        </li>
      </ul>
    </nav>
  )
}

function Link(props) {
  const selectionTag  = (propsTag) => {
    let tag;
    switch (propsTag) {
      case 'BurgerIcon':
        tag = <BurgerIcon type={props.type}/>;
        break;
      case 'ListIcon':
        tag = <ListIcon type={props.type} />;
        break;
      case 'ProfileIcon':
        tag = <ProfileIcon type={props.type} />;
        break;
    }
    return tag;
  }

  return(
    <a href="#" className={styles.link + ' pt-4 pr-5 pb-4 pl-5'}>
        <div className='mr-2'>
          {selectionTag(props.tag)}
        </div>
        <span className={props.typeText}>{props.children}</span>
      </a>
  )
}

export default function AppHeader() {
  return (
    <header className={styles.header + " pt-4 pb-4"}>
      <div className={styles.header__container}>
        <div className={styles.header__menu}>
          <Menu />
        </div>
        <div className={styles.header__logo}>
          <Logo />
        </div>
        <Link tag="ProfileIcon" type="secondary" typeText="text text_type_main-default text_color_inactive">Личный кабинет</Link>
      </div>
    </header>
  )
}
