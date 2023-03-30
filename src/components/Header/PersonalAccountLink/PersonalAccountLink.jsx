import PropTypes from "prop-types";
import { useMatch } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";

export const PersonalAccountLink = ({
  activeIcon,
  inactiveIcon,
  activeStyle,
  inactiveStyle,
  children,
}) => {
  const matchProfile = useMatch("/profile");
  const matchOrders = useMatch("/orders");
  const matchLogin = useMatch("/login");
  const matchRegister = useMatch("/register");
  const matchForgotPassword = useMatch("/forgot-password");
  const matchResetPassword = useMatch("/reset-password");

  const checkMatch = () => {
    if (
      matchProfile ||
      matchOrders ||
      matchLogin ||
      matchRegister ||
      matchForgotPassword ||
      matchResetPassword
    ) {
      return true;
    }

    return false;
  };

  const icon = checkMatch() ? activeIcon : inactiveIcon;
  const style = checkMatch() ? activeStyle : inactiveStyle;

  return (
    <CustomLink to={"/profile"} icon={icon} style={style}>
      {children}
    </CustomLink>
  );
};

PersonalAccountLink.propTypes = {
  activeIcon: PropTypes.object.isRequired,
  inactiveIcon: PropTypes.object.isRequired,
  activeStyle: PropTypes.string.isRequired,
  inactiveStyle: PropTypes.string.isRequired,
};
