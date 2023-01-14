import React from "react";
import styles from "./ErrorBoundary.module.css";

export default class ErrorBoundary extends React.Component {
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
