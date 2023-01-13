import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { OrderDetails } from '../OrderDetails/OrderDetails';
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById('root');

const ModalOverlay = ({ children, onCloseOverlay, onCloseEscape }) => {
  React.useEffect(() => {
    document.addEventListener('keydown', onCloseEscape);

    return () => {
      document.removeEventListener('keydown', onCloseEscape);
    }
  })

  return (
    <>
      <div className={styles.overlay} id="overlay" onClick={onCloseOverlay}>{children}</div>
    </>
  )
}

ModalOverlay.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  onCloseEscape: PropTypes.func.isRequired
}

export const Modal = ({ onClose, onCloseOverlay, onCloseEscape, data, selectionModal }) => {
  return ReactDOM.createPortal(
    (
      <ModalOverlay onCloseOverlay={onCloseOverlay} onCloseEscape={onCloseEscape}>
        <div className={styles.modal + ' p-10 pb-15'}>
          <button className={styles.button__close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          <div className={styles.container}>
            {selectionModal ?
              <OrderDetails orderId="034536" /> :
              <IngredientDetails data={data} />
            }
          </div>
        </div>
      </ModalOverlay>
    ),
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCloseOverlay: PropTypes.func.isRequired,
  onCloseEscape: PropTypes.func.isRequired,
  data: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string,
    image_large: PropTypes.string.isRequired,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price:  PropTypes.number,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  }),
  selectionModal: PropTypes.bool.isRequired
}
