import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";
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

export const Modal = ({ onClose, onCloseOverlay, onCloseEscape }) => {
  return ReactDOM.createPortal(
    (
      <ModalOverlay onCloseOverlay={onCloseOverlay} onCloseEscape={onCloseEscape}>
        <div className={styles.modal + ' p-10 pb-15'}>
          <button className={styles.button__close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
          <div>
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
          </div>
        </div>
      </ModalOverlay>
    ),
    modalRoot
  );
}
