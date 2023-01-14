import React from "react";
import styles from "./App.module.css";
import { getIngredients } from "../../utils/burger-api";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { Modal } from "../Modal/Modal";
import { IngredientDetails } from "../IngredientDetails/IngredientDetails";
import { OrderDetails } from "../OrderDetails/OrderDetails";

export const App = () => {
  const [dataApi, setDataApi] = React.useState({
    init: false,
    isLoading: false,
    hasError: false,
    info: [],
  });

  const [visible, setVisible] = React.useState(false);

  const [dataIngredient, setDataIngredient] = React.useState(null);

  const [ingredientDetailsOpen, setIngredientDetailsOpen] =
    React.useState(null);

  const [orderDetailsOpen, setOrderDetailsOpen] = React.useState(null);

  React.useEffect(() => {
    const getData = async () => {
      setDataApi((prevState) => {
        return { ...prevState, hasError: false, isLoading: true };
      });
      getIngredients(responseServer, rejectServer, requestСompletionServer);
    };

    getData();
  }, []);

  const responseServer = (data) => {
    setDataApi((prevState) => {
      return { ...prevState, info: data.data };
    });
  };

  const rejectServer = () => {
    setDataApi((prevState) => {
      return { ...prevState, isLoading: false, hasError: true };
    });
  };

  const requestСompletionServer = () => {
    setDataApi((prevState) => {
      return { ...prevState, isLoading: false, init: true };
    });
  };

  const handleOpenModalIngredients = (e) => {
    setDataIngredient(sortingIngredients(e.currentTarget.id));
    setVisible(true);
    setIngredientDetailsOpen(true);
  };

  const handleOpenModalConstructor = () => {
    setVisible(true);
    setOrderDetailsOpen(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
    setIngredientDetailsOpen(false);
    setOrderDetailsOpen(false);
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
      {!dataApi.isLoading && !dataApi.hasError && dataApi.init && (
        <main className={styles.content}>
          <div className={styles.container}>
            <BurgerIngredients
              data={dataApi.info}
              onOpen={handleOpenModalIngredients}
            />
            <BurgerConstructor
              data={dataApi.info}
              onOpen={handleOpenModalConstructor}
            />
          </div>
        </main>
      )}
      {visible && ingredientDetailsOpen && (
        <Modal onClose={handleCloseModal}>
          <IngredientDetails data={dataIngredient} />
        </Modal>
      )}
      {visible && orderDetailsOpen && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails orderId="034536" />
        </Modal>
      )}
    </>
  );
};
