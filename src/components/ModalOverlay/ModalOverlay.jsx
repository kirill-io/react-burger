import PropTypes from "prop-types";
import styles from "./ModalOverlay.module.css";

export const ModalOverlay = ({ onClose, modalClose }) => {
  const onCloseOverlay = () => {
    if (modalClose) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} id="overlay" onClick={onCloseOverlay} />
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func,
  modalClose: PropTypes.bool.isRequired,
};
