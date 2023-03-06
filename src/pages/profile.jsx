import styles from "./profile.module.css";
import { ProfileMenu } from "../components/ProfileMenu/ProfileMenu";
import { ProfileInputs } from "../components/ProfileInputs/ProfileInputs";

export const ProfilePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <ProfileMenu margin="mr-15"/>
        <ProfileInputs />
      </div>
    </div>
  )
};
