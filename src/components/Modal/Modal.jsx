import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("root");
const ESC_KEYCODE = 27;

export const Modal = ({ onClose, children }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onCloseEscape);

    return () => {
      document.removeEventListener("keydown", onCloseEscape);
    };
  }, []); // eslint-disable-line

  const onCloseEscape = (e) => {
    if (e.keyCode === ESC_KEYCODE) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div className={styles.modal + " p-10 pb-15"}>
        <button className={styles.button__close} onClick={onClose}>
          <CloseIcon type="primary" />
        </button>
        <div className={styles.container}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
