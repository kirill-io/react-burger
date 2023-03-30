import { Outlet, useParams } from 'react-router-dom';
import styles from "./feed.module.css";
import { OrderList } from "../components/OrderList/OrderList";
import { OrderStatistics } from "../components/OrderStatistics/OrderStatistics";

export const FeedPage = () => {
  const { id } = useParams();

  return (
    <main className={styles.wrapper}>
      {!id &&
        <div className={styles.container}>
          <h2 className={styles.title + " text text_type_main-large"}>Лента заказов</h2>
          <div className={styles.content}>
            <section className={styles.feed}>
              <OrderList />
            </section>
            <section className={styles.statistics}>
              <OrderStatistics />
            </section>
          </div>
        </div>
      }
      <Outlet />
    </main>
  );
};
