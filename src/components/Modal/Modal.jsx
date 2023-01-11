import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { render } from "@testing-library/react";

const modalRoot = document.getElementById('root');

const ModalOverlay = ({ children, onCloseOverlay, onCloseEscape }) => {
  React.useEffect(() => {
    document.addEventListener('keydown', onCloseEscape);

    return () => {
      document.removeEventListener('keydown', onCloseEscape);
    }
  }, [])

  return (
    <>
      <div className={styles.overlay} id="overlay" onClick={onCloseOverlay}>{children}</div>
    </>
  )
}

export const Modal = ({ onClose, onCloseOverlay, onCloseEscape, data }) => {
  return ReactDOM.createPortal(
    (
      <ModalOverlay onCloseOverlay={onCloseOverlay} onCloseEscape={onCloseEscape}>
        <div className={styles.modal + ' p-10 pb-15'}>
          <button className={styles.button__close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          <div className={styles.container}>
            {/* <IngredientDetails data={data} /> */}
            <OrderDetails orderId="034536" />
          </div>
        </div>
      </ModalOverlay>
    ),
    modalRoot
  );
}
