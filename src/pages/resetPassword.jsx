import { Navigate } from "react-router-dom";
import styles from "./resetPassword.module.css";
import { getCookie } from "../utils/cookies";
import { ResetPasswordForm } from "../components/ResetPasswordForm/ResetPasswordForm";

export const ResetPasswordPage = () => {
  const resetPassword = (
    <div className={styles.container}>
      <ResetPasswordForm />
    </div>
  );

  if (getCookie("isAuthenticated")) {
    return <Navigate to="/" replace />;
  }

  return getCookie("forgotPassword") ? (
    resetPassword
  ) : (
    <Navigate to="/forgot-password" replace />
  );
};
