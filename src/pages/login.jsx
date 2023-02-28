import styles from "./login.module.css";
import { SingInForm } from "../components/SingInForm/SingInForm";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <SingInForm />
    </div>
  )
};
