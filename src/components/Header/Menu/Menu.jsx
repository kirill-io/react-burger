import styles from "./Menu.module.css";
import { Link } from "../Link/Link";
import {
  BurgerIcon,
  ListIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Menu = () => {
  return (
    <nav className="menu">
      <ul className={styles.list}>
        <li className="menu__item mr-2">
          <Link
            tag={<BurgerIcon type="primary" />}
            typeText="text text_type_main-default"
          >
            Конструктор
          </Link>
        </li>
        <li className="menu__item">
          <Link
            tag={<ListIcon type="secondary" />}
            typeText="text text_type_main-default text_color_inactive"
          >
            Лента заказов
          </Link>
        </li>
      </ul>
    </nav>
  );
};
