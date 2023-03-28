import PropTypes from "prop-types";
import styles from "./CustomProfileLink.module.css";

export const CustomProfileLink = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
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
