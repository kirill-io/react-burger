import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./IngredientDetails.module.css";
import { Modal } from "../Modal/Modal";
import { IngredientContent } from "./IngredientContent/IngredientContent";

export const IngredientDetails = ({ modal }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { ingredients } = useSelector((store) => store.ingredients);

  const ingredient = ingredients.find((item) => item._id === id);

  const titleCenterStyle = { alignSelf: "center" };

  const handleCloseModalIngredients = () => {
    navigate("/");
  };

  if (modal) {
    return (
      <Modal
        onClose={handleCloseModalIngredients}
        modalClose={true}
        buttonClose={true}
      >
        <IngredientContent ingredient={ingredient} />
      </Modal>
    );
  }

  return (
    <div className={styles.conatainer}>
      <IngredientContent ingredient={ingredient} style={titleCenterStyle} />
    </div>
  );
};

IngredientDetails.propTypes = {
  modal: PropTypes.bool.isRequired,
};
