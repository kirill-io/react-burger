import PropTypes from "prop-types";
import styles from "./Status.module.css";

export const Status = ({ status }) => {
  if (status === "done") {
    return (
      <p className={styles.done + " text text_type_main-default"}>Выполнен</p>
    );
  } else if (status === "created") {
    return <p className="text text_type_main-default">В работе</p>;
  } else if (status === "pending") {
    return <p className="text text_type_main-default">В ожидании</p>;
  }
};

Status.propTypes = {
  status: PropTypes.string.isRequired,
};
