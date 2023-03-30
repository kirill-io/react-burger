import { Outlet, useParams } from 'react-router-dom';
import styles from "./orders.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { Orders } from "../components/Orders/Orders";

export const OrdersPage = () => {
  const { id } = useParams();

  return (
    <div className={styles.wrapper}>
      {!id &&
        <div className={styles.container}>
          <ProfileMenu margin="mr-15" />
          <Orders />
        </div>
      }
      <Outlet />
    </div>
  );
};
