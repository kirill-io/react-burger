import styles from "./resetPassword.module.css";
import { ResetPasswordForm } from "../components/ResetPasswordForm/ResetPasswordForm";

export const ResetPasswordPage = () => {
  return (
    <div className={styles.container}>
      <ResetPasswordForm />
    </div>
  )
};
