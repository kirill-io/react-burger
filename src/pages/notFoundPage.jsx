import styles from './notFoundPage.module.css';

export const NotFoundPage = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className="text text_type_digits-large">404</div>
        <h2 className="text text_type_main-large">Page Not Found</h2>
      </div>
    </section>
  );
};
