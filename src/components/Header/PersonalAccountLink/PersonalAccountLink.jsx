import { useMatch } from 'react-router-dom';
import { CustomLink } from "../CustomLink/CustomLink";

export const PersonalAccountLink = ({ activeIcon, inactiveIcon, activeStyle, inactiveStyle, children }) => {
  const matchProfile = useMatch('/profile');
  const matchOrders = useMatch('/orders');

  const icon = (matchProfile || matchOrders) ? activeIcon : inactiveIcon;
  const style = (matchProfile || matchOrders) ? activeStyle : inactiveStyle;

  return (
    <CustomLink
      to={'/profile'}
      icon={icon}
      style={style}
    >
      {children}
    </CustomLink>
  );
};
