import React from "react";
import styles from "./App.module.css";
import { AppHeader } from "../AppHeader/AppHeader";
import { BurgerIngredients } from "../BurgerIngredients/BurgerIngredients";
import { BurgerConstructor } from "../BurgerConstructor/BurgerConstructor";
import { data } from "../../utils/data";

const dataUrl = 'https://norma.nomoreparties.space/api/ingredients ';

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
              <BurgerIngredients data={dataApi.info} />
              <BurgerConstructor data={data} />
            </div>
          </main>
        }
      </>
    );
  }
};
