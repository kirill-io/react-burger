import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./feed.module.css";
import { OrderList } from "../components/OrderList/OrderList";
import { OrderStatistics } from "../components/OrderStatistics/OrderStatistics";
import { wsActions } from "../services/actions/wsActions";
import { WS_URL_ORDERS_ALL } from "../utils/burger-api";

export const FeedPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data.messages);

  const modal = location?.state?.modal;

  useEffect(() => {
    dispatch({ type: wsActions.wsInit, payload: WS_URL_ORDERS_ALL });

    return () => {
      dispatch({ type: wsActions.onClose });
    };
  }, [dispatch]);

  return (
    <main className={styles.wrapper}>
      {data[0] && modal && (
        <div className={styles.container}>
          <h2 className={styles.title + " text text_type_main-large"}>
            Лента заказов
          </h2>
          <div className={styles.content}>
            <section className={styles.feed}>
              <OrderList orders={data[0].orders} />
            </section>
            <section className={styles.statistics}>
              <OrderStatistics data={data[0]} />
            </section>
          </div>
        </div>
      )}
      <Outlet />
    </main>
  );
};
