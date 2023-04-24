import { useEffect } from "react";
import { useDispatch, useSelector } from "../services/hooks";
import { Outlet, useLocation } from "react-router-dom";
import styles from "./orders.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { Orders } from "../components/Orders/Orders";
import { wsActions } from "../services/actions/wsActions";
import { checkToken } from "../utils/check-token";
import { WS_URL_ORDERS_USER } from "../utils/burger-api";

export const OrdersPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const data = useSelector((store) => store.data.messages[0]?.orders.reverse());

  const modal = location?.state?.modal;

  useEffect(() => {
    checkToken().then((res) => {
      dispatch({
        type: wsActions.wsInit,
        payload: `${WS_URL_ORDERS_USER}?token=${res}`,
      });
    });

    return () => {
      dispatch({ type: wsActions.onClose });
    };
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      {data && modal && (
        <div className={styles.container}>
          <ProfileMenu />
          <Orders data={data} />
        </div>
      )}
      <Outlet />
    </div>
  );
};
