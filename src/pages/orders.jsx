import styles from "./orders.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";

export const OrdersPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProfileMenu margin="mr-15" />
      </div>
    </div>
  );
};
