import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./CustomProfileLink.module.css";

export const CustomProfileLink = ({ children, onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickLinkHandler = () => {
    navigate("/login", { replace: true, state: { from: location } });
    onClick();
  };

  return (
    <div
      onClick={onClickLinkHandler}
      className={
        styles.link + " text text_type_main-medium text_color_inactive"
      }
    >
      {children}
    </div>
  );
};

CustomProfileLink.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
