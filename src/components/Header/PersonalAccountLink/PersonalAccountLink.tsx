import { FC, ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";

interface IPersonalAccountLinkProps {
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
  activeStyle: string;
  inactiveStyle: string;
  children: string;
}

export const PersonalAccountLink: FC<IPersonalAccountLinkProps> = ({
  activeIcon,
  inactiveIcon,
  activeStyle,
  inactiveStyle,
  children,
}) => {
  const matchProfile = useMatch("/profile");
  const matchOrders = useMatch("/orders");
  const matchOrdersElement = useMatch("/orders/:id");
  const matchLogin = useMatch("/login");
  const matchRegister = useMatch("/register");
  const matchForgotPassword = useMatch("/forgot-password");
  const matchResetPassword = useMatch("/reset-password");

  const checkMatch = () => {
    if (
      matchProfile ||
      matchOrders ||
      matchOrdersElement ||
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
