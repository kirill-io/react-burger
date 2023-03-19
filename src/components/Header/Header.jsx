import styles from "./Header.module.css";
import { Menu } from "./Menu/Menu";
import { PersonalAccountLink } from "./PersonalAccountLink/PersonalAccountLink";
import {
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";

export const Header = () => {
  return (
    <header className={styles.header + " pt-4 pb-4"}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <Menu />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <PersonalAccountLink
          activeIcon={<ProfileIcon type="primary" />}
          inactiveIcon={<ProfileIcon type="secondary" />}
          activeStyle="text text_type_main-default"
          inactiveStyle="text text_type_main-default text_color_inactive"
        >
          Личный кабинет
        </PersonalAccountLink>
      </div>
    </header>
  );
};
