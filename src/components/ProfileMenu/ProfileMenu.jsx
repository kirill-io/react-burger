import { NavLink } from 'react-router-dom';
import styles from "./ProfileMenu.module.css";

export const ProfileMenu = ({ margin }) => {
  const active = {
    color: "#F2F2F3"
  }

  const setActive = ({isActive}) => (isActive ? active : undefined)

  return (
    <nav className={margin}>
      <ul className={styles.menu}>
        <li>
          <NavLink to={{ pathname: `/profile` }} className={styles.link + " text text_type_main-medium text_color_inactive"} style={setActive}>Профиль</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/orders` }} className={styles.link + " text text_type_main-medium text_color_inactive"} style={setActive}>История заказов</NavLink>
        </li>
        <li>
          <NavLink to={{ pathname: `/exit` }} className={styles.link + " text text_type_main-medium text_color_inactive"} style={setActive}>Выход</NavLink>
        </li>
      </ul>
    </nav>
  );
};
