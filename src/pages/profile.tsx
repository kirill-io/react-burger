import styles from "./profile.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { ProfileInputs } from "../components/ProfileInputs/ProfileInputs";

export const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProfileMenu />
        <ProfileInputs />
      </div>
    </div>
  );
};
