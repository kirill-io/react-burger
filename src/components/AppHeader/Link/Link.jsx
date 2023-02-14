import PropTypes from "prop-types";
import styles from "./Link.module.css";

export const Link = ({ tag, typeText, children }) => {
  return (
    // TODO: на данном этапе проект состоит из одной страницы "Конструктор", в атрибуте href указаны заглушки
    // eslint-disable-next-line
    <a href="#" className={styles.link + " pt-4 pr-5 pb-4 pl-5"}>
      <div className="mr-2">{tag}</div>
      <span className={typeText}>{children}</span>
    </a>
  );
};

Link.propTypes = {
  tag: PropTypes.object.isRequired,
  typeText: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
