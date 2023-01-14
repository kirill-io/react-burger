import React from "react";
import styles from "./App.module.css";
import { getIngredients } from "../../utils/burger-api";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { dataTest } from "../../utils/dataTest";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

export const App = () => {
  const [dataApi, setDataApi] = React.useState({
    isLoading: false,
    hasError: false,
    info: [],
  });

  const [choiceOrderModal, setChoiceOrderModal] = React.useState(false);

  const [visible, setVisible] = React.useState(false);

  const [dataIngredient, setDataIngredient] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      setDataApi(prevState => {
        return { ...prevState, hasError: false, isLoading: true }
      })
      getIngredients(responseServer, rejectServer, requestСompletionServer);
    };

    getData();
  }, []);

  const responseServer = (data) => {
    setDataApi(prevState => {
      return { ...prevState, info: data.data }
    });
  };

  const rejectServer = () => {
    setDataApi(prevState => {
      return { ...prevState, isLoading: false, hasError: true }
    })
  };

  const requestСompletionServer = () => {
    setDataApi(prevState => {
      return { ...prevState, isLoading: false }
    });
  };

  const handleOpenModalIngredients = (e) => {
    setVisible(true);
    setDataIngredient(sortingIngredients(e.currentTarget.id));
  };

  const handleOpenModalConstructor = () => {
    setVisible(true);
    setChoiceOrderModal(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setChoiceOrderModal(false);
  };

  const sortingIngredients = (id) => {
    return dataApi.info.find((item) => item._id === id);
  };

  if (dataApi.hasError) {
    return <ErrorBoundary />;
  }

  return (
    <>
      <AppHeader />
      {!dataApi.isLoading && !dataApi.hasError && (
        <main className={styles.content}>
          <div className={styles.container}>
            <BurgerIngredients data={dataApi.info} onOpen={handleOpenModalIngredients} />
            <BurgerConstructor data={dataTest} onOpen={handleOpenModalConstructor} />
          </div>
        </main>
      )}
      {visible && (
        <Modal onClose={handleCloseModal}>
          <IngredientDetails data={dataIngredient} />
        </Modal>
      )}
      {visible &&
        choiceOrderModal &&
        (
          <Modal onClose={handleCloseModal}>
            <OrderDetails orderId="034536" />
          </Modal>
        )}
    </>
  );
};
