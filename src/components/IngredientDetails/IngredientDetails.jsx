import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from "./IngredientDetails.module.css";
import { Modal } from "../Modal/Modal";
import { IngredientContent } from "./IngredientContent/IngredientContent";

export const IngredientDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { ingredients } = useSelector((store) => store.ingredients);

  const id = location.pathname.split('/')[2];

  const ingredient = ingredients.find(item => item._id === id)

  const titleCenterStyle = {alignSelf: "center"};

  const handleCloseModalIngredients = () => {
    navigate('/');
  };

  if (location.key === 'default') {
    return (
      <div className={styles.conatainer}>
        <IngredientContent ingredient={ingredient} style={titleCenterStyle}/>
      </div>
    );
  }

  return (
    <Modal onClose={handleCloseModalIngredients}>
      <IngredientContent ingredient={ingredient} />
    </Modal>
  );
};
