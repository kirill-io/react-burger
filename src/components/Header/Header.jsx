import styles from "./Header.module.css";
import { Menu } from "./Menu/Menu";
import { Link } from "./Link/Link";
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
        <Link
          tag={<ProfileIcon type="secondary" />}
          typeText="text text_type_main-default text_color_inactive"
        >
          Личный кабинет
        </Link>
      </div>
    </header>
  );
};
