import { useMatch } from 'react-router-dom';
import styles from "./Menu.module.css";
import { CustomLink } from "../CustomLink/CustomLink";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Menu = () => {
  const matchConstructor = useMatch('/');
  const matchOrderFeed = useMatch('/order-feed');

  const constructorIcon = matchConstructor ? <BurgerIcon type="primary" /> : <BurgerIcon type="secondary" />;
  const constructorStyle = matchConstructor ? "text text_type_main-default" : "text text_type_main-default text_color_inactive";

  const orderFeedIcon = matchOrderFeed ? <ListIcon type="primary" /> : <ListIcon type="secondary" />;
  const orderFeedStyle = matchOrderFeed ? "text text_type_main-default" : "text text_type_main-default text_color_inactive";

  return (
    <nav className="menu">
      <ul className={styles.list}>
        <li className="menu__item mr-2">
          <CustomLink
            to="/"
            icon={constructorIcon}
            style={constructorStyle}
          >
            Конструктор
          </CustomLink>
        </li>
        <li className="menu__item">
          <CustomLink
            to="order-feed"
            icon={orderFeedIcon}
            style={orderFeedStyle}
          >
            Лента заказов
          </CustomLink>
        </li>
      </ul>
    </nav>
  );
};
