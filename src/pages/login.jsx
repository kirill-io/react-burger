import styles from "./login.module.css";
import { Header } from "../components/Header/Header";
import { SingInForm } from "../components/SingInForm/SingInForm";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SingInForm />
    </div>
  )
};
