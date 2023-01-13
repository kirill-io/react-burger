import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("root");

const ModalOverlay = ({ children, onCloseOverlay, onCloseEscape }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onCloseEscape);

    return () => {
      document.removeEventListener("keydown", onCloseEscape);
    };
  });

  return (
    <>
      <div className={styles.overlay} id="overlay" onClick={onCloseOverlay}>
        {children}
      </div>
    </>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  onCloseEscape: PropTypes.func.isRequired,
};

export const Modal = ({ onClose, onCloseOverlay, onCloseEscape, children }) => {
  return ReactDOM.createPortal(
    <ModalOverlay onCloseOverlay={onCloseOverlay} onCloseEscape={onCloseEscape}>
      <div className={styles.modal + " p-10 pb-15"}>
        <button className={styles.button__close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        <div className={styles.container}>{children}</div>
      </div>
    </ModalOverlay>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  onCloseEscape: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
