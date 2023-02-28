import styles from "./forgotPassword.module.css";
import { ForgotPasswordForm } from "../components/ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPasswordPage = () => {
  return (
    <div className={styles.container}>
      <ForgotPasswordForm />
    </div>
  )
};
