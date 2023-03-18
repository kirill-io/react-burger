import { Navigate } from 'react-router-dom';
import styles from "./forgotPassword.module.css";
import { getCookie } from '../utils/cookies';
import { ForgotPasswordForm } from "../components/ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
  if (getCookie('isAuthenticated')) {
    return (
      <Navigate to="/" replace />
    );
  }

  return (
    <div className={styles.container}>
      <ForgotPasswordForm />
    </div>
  )
};
