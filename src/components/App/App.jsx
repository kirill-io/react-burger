import React from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { dataTest } from "../../utils/dataTest";
import { Modal } from '../Modal/Modal';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails';
import { OrderDetails } from '../OrderDetails/OrderDetails';

const dataUrl = 'https://norma.nomoreparties.space/api/ingredients';
let dataIngredient = {};

class ErrorBoundary extends React.Component {
  render() {
    return (
      <section className={styles.error}>
        <h1 className="text text_type_main-large">Что-то пошло не так :(</h1>
        <p className="text text_type_main-default">
          Ошибка получения данных с сервера. Пожалуйста, перезагрузите страницу.
        </p>
      </section>
    );
  }
}


export const App = () => {
  const [dataApi, setDataApi] = React.useState({
    isLoading: false,
    hasError: false,
    info: []
  });

  const [selectionModal, setSelectionModal] = React.useState(false);

  const [visible, setVisible] =  React.useState(false);

  //TODO: Нельзя в зависимостях указать dataApi или удалить пустой массив с зависимостями, так как возникает бесконечный цикл рендеринга
  /* eslint-disable */
  React.useEffect(() => {
    const getData = async () => {
      setDataApi({ ...dataApi, hasError: false, isLoading: true });
      fetch(dataUrl)
        .then(res => res.json())
        .then(data => setDataApi({ ...dataApi, info: data.data, isLoading: false}))
        .catch(e => {
          setDataApi({ ...dataApi, isLoading: false, hasError: true });
        })
    }

    getData();
  }, [])
  /* eslint-enable */

  const handleOpenModal = (e) => {
    setVisible(true);
    dataIngredient = sortingIngredients(e.currentTarget.id);
    if (e.currentTarget.type === 'button') {
      setSelectionModal(true);
    } else {
      setSelectionModal(false);
    }
  }

  const handleCloseModal = () => {
    setVisible(false);
  }

  const handleCloseModalByClickOnOverlay = (e) => {
    if (e.target.id === 'overlay') {
      setVisible(false);
    }
  }

  const handleCloseModalByEscape = (e) => {
    if (e.keyCode === 27) {
      setVisible(false);
    }
  }

  const sortingIngredients = (id) => {
    return dataApi.info.find(item => item._id === id)
  }

  if (dataApi.hasError) {
    return (
      <ErrorBoundary />
    )
  } else {
    return (
      <>
        <AppHeader />
        {!dataApi.isLoading &&
          !dataApi.hasError &&
          <main className={styles.content}>
            <div className={styles.container}>
              <BurgerIngredients data={dataApi.info} onOpen={handleOpenModal} />
              <BurgerConstructor data={dataTest} onOpen={handleOpenModal} />
            </div>
          </main>
        }
        {visible &&
          <Modal onClose={handleCloseModal} onCloseOverlay={handleCloseModalByClickOnOverlay} onCloseEscape={handleCloseModalByEscape}>
            {selectionModal ?
              <OrderDetails orderId="034536" /> :
              <IngredientDetails data={dataIngredient} />
            }
          </Modal>}
      </>
    );
  }
};
