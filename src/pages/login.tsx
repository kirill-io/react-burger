import { Navigate } from "react-router-dom";
import styles from "./login.module.css";
import { getCookie } from "../utils/cookies";
import { SingInForm } from "../components/SingInForm/SingInForm";

export const LoginPage = () => {
  if (getCookie("isAuthenticated")) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <SingInForm />
    </div>
  );
};
