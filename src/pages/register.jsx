import { Navigate } from "react-router-dom";
import styles from "./register.module.css";
import { getCookie } from "../utils/cookies";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  if (getCookie("isAuthenticated")) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  );
};
