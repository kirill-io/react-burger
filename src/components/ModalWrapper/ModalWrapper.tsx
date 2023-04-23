import { FC, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "../Modal/Modal";

interface IModalWrapperProps {
  element: ReactNode;
}

export const ModalWrapper: FC<IModalWrapperProps> = ({ element }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCloseModal = () => {
    navigate(-1);
  };

  if (location?.state?.modal) {
    return (
      <Modal onClose={handleCloseModal} modalClose={true} buttonClose={true}>
        {element}
      </Modal>
    );
  }

  return <>{element}</>;
};
