import { useNavigate, useLocation } from "react-router-dom";
import { Modal } from "../Modal/Modal";

export const ModalWrapper = ({ element }) => {
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
