import React from "react";
import styles from "./App.module.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { dataTest } from "../../utils/dataTest";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

const dataUrl = "https://norma.nomoreparties.space/api/ingredients";
let dataIngredient = {};

export const App = () => {
  const [dataApi, setDataApi] = React.useState({
    isLoading: false,
    hasError: false,
    info: [],
  });

  const [selectionModal, setSelectionModal] = React.useState(false);

  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const getData = async () => {
      setDataApi(prevState => {
        return { ...prevState, hasError: false, isLoading: true }
      })
      fetch(dataUrl)
        .then((res) => res.json())
        .then((data) =>
          setDataApi(prevState => {
            return { ...prevState, info: data.data, isLoading: false }
          })
        )
        .catch((e) => {
          setDataApi(prevState => {
            return { ...prevState, isLoading: false, hasError: true }
          })
        });
    };

    getData();
  }, []);

  const handleOpenModal = (e) => {
    setVisible(true);
    dataIngredient = sortingIngredients(e.currentTarget.id);
    if (e.currentTarget.type === "button") {
      setSelectionModal(true);
    } else {
      setSelectionModal(false);
    }
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  const handleCloseModalByClickOnOverlay = (e) => {
    if (e.target.id === "overlay") {
      setVisible(false);
    }
  };

  const handleCloseModalByEscape = (e) => {
    if (e.keyCode === 27) {
      setVisible(false);
    }
  };

  const sortingIngredients = (id) => {
    return dataApi.info.find((item) => item._id === id);
  };

  if (dataApi.hasError) {
    return <ErrorBoundary />;
  } else {
    return (
      <>
        <AppHeader />
        {!dataApi.isLoading && !dataApi.hasError && (
          <main className={styles.content}>
            <div className={styles.container}>
              <BurgerIngredients data={dataApi.info} onOpen={handleOpenModal} />
              <BurgerConstructor data={dataTest} onOpen={handleOpenModal} />
            </div>
          </main>
        )}
        {visible && (
          <Modal
            onClose={handleCloseModal}
            onCloseOverlay={handleCloseModalByClickOnOverlay}
            onCloseEscape={handleCloseModalByEscape}
          >
            {selectionModal ? (
              <OrderDetails orderId="034536" />
            ) : (
              <IngredientDetails data={dataIngredient} />
            )}
          </Modal>
        )}
      </>
    );
  }
};
