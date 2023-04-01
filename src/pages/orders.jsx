import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from 'react-router-dom';
import styles from "./orders.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { Orders } from "../components/Orders/Orders";
import { entryOrderPage, exitOrderPage } from "../services/actions/orderPage"
import {
  WS_CONNECTION_START,
  WS_CONNECTION_CLOSED
} from '../services/actions/wsActions';

import { checkToken } from "../utils/check-token";

export const OrdersPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data.messages[0]?.orders.reverse());

  useEffect(() => {
    dispatch(entryOrderPage());
    checkToken()
      .then(() => {
        dispatch({ type: WS_CONNECTION_START });
      })

    return () => {
      dispatch(exitOrderPage());
      dispatch({ type: WS_CONNECTION_CLOSED });
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {!id && data &&
        <div className={styles.container}>
          <ProfileMenu margin="mr-15" />
          <Orders data={data} />
        </div>
      }
      <Outlet />
    </div>
  );
};
