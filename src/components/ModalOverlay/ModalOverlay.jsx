import React from "react";
import PropTypes from "prop-types";
import styles from "./ModalOverlay.module.css";

const ESC_KEYCODE = 27;

export const ModalOverlay = ({ onClose }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onCloseEscape);

    return () => {
      document.removeEventListener("keydown", onCloseEscape);
    };
  });

  const onCloseEscape = (e) => {
    if (e.keyCode === ESC_KEYCODE) {
      onClose();
    }
  };

  const onCloseOverlay = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.overlay} id="overlay" onClick={onCloseOverlay} />
    </>
  );
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired,
};
