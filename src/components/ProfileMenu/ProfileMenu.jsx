import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./ProfileMenu.module.css";
import { CustomProfileLink } from "./CustomProfileLink/CustomProfileLink";
import { singOut } from "../../services/actions/login";
// import { request } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";

export const ProfileMenu = ({ margin }) => {
  const active = {
    color: "#F2F2F3",
  };

  const setActive = ({ isActive }) => (isActive ? active : undefined);

  const onClickExitHandler = () => {
    singOut()
      .then(() => {
        setCookie("accessToken", "", -1);
        setCookie("refreshToken", "", -1);
        setCookie("isAuthenticated", "", -1);
      })
      .catch(() => alert("При выходе произошла ошибка."));
  };

  return (
    <nav className={margin}>
      <ul className={styles.menu}>
        <li>
          <NavLink
            to={"/profile"}
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            style={setActive}
          >
            Профиль
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/orders"}
            className={
              styles.link + " text text_type_main-medium text_color_inactive"
            }
            style={setActive}
          >
            История заказов
          </NavLink>
        </li>
        <li>
          <CustomProfileLink onClick={onClickExitHandler}>
            Выход
          </CustomProfileLink>
        </li>
      </ul>
    </nav>
  );
};

ProfileMenu.propTypes = {
  margin: PropTypes.string.isRequired,
};
