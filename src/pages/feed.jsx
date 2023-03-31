import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import styles from "./feed.module.css";
import { OrderList } from "../components/OrderList/OrderList";
import { OrderStatistics } from "../components/OrderStatistics/OrderStatistics";
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED
} from '../services/actions/wsActions';

export const FeedPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data.messages);

  useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });

    return () => {
      dispatch({ type: WS_CONNECTION_CLOSED });
    }
  }, [dispatch]);

  return (
    <main className={styles.wrapper}>
      {!id && data[0] &&
        <div className={styles.container}>
          <h2 className={styles.title + " text text_type_main-large"}>Лента заказов</h2>
          <div className={styles.content}>
            <section className={styles.feed}>
              <OrderList orders={data[0].orders}/>
            </section>
            <section className={styles.statistics}>
              <OrderStatistics data={data[0]}/>
            </section>
          </div>
        </div>
      }
      <Outlet />
    </main>
  );
};
