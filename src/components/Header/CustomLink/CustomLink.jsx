import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import styles from "./CustomLink.module.css";

export const CustomLink = ({ to, icon, style, children }) => {

  return (
    <Link to={to} className={styles.link + " pt-4 pr-5 pb-4 pl-5"}>
      <div className="mr-2">{icon}</div>
      <span className={style}>{children}</span>
    </Link>
  );
};

Link.propTypes = {
  to: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
  icon: PropTypes.object,
  style: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};
