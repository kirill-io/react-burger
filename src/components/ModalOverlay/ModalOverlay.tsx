import { FC } from "react";
import styles from "./ModalOverlay.module.css";

interface IModalOverlayProps {
  onClose: () => void;
  modalClose: boolean;
}

export const ModalOverlay: FC<IModalOverlayProps> = ({ onClose, modalClose }) => {
  const onCloseOverlay = () => {
    if (modalClose) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} id="overlay" onClick={onCloseOverlay} />
  );
};
