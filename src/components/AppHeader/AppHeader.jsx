import React from 'react';
import styles from './AppHeader.module.css';
import { BurgerIcon, ListIcon, ProfileIcon, Logo } from '@ya.praktikum/react-developer-burger-ui-components';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className={styles.list}>
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

const Link = ({ tag, type, typeText, children }) => {
  const selectionTag  = (propsTag) => {
    let tag;
    switch (propsTag) {
      case 'BurgerIcon':
        tag = <BurgerIcon type={type}/>;
        break;
      case 'ListIcon':
        tag = <ListIcon type={type} />;
        break;
      case 'ProfileIcon':
        tag = <ProfileIcon type={type} />;
        break;
    }
    return tag;
  }

  return(
    <a href="#" className={styles.link + ' pt-4 pr-5 pb-4 pl-5'}>
        <div className='mr-2'>
          {selectionTag(tag)}
        </div>
        <span className={typeText}>{children}</span>
      </a>
  )
}

export const AppHeader = () => {
  return (
    <header className={styles.header + " pt-4 pb-4"}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Link tag="ProfileIcon" type="secondary" typeText="text text_type_main-default text_color_inactive">Личный кабинет</Link>
      </div>
    </header>
  )
}
