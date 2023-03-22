import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { ModalOverlay } from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("root");
const ESC_KEYCODE = 27;

export const Modal = ({ onClose, modalClose, children, buttonClose }) => {
  useEffect(() => {
    if (modalClose) {
      document.addEventListener("keydown", onCloseEscape);

      return () => {
        document.removeEventListener("keydown", onCloseEscape);
      };
    }
  }, []); // eslint-disable-line

  const onCloseEscape = (e) => {
    if (e.keyCode === ESC_KEYCODE && modalClose) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} modalClose={modalClose} />
      <div className={styles.modal + " p-10 pb-15"}>
        {buttonClose && (
          <button className={styles.button__close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        )}
        <div className={styles.container}>{children}</div>
      </div>
    </>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.element.isRequired,
  buttonClose: PropTypes.bool.isRequired,
};
