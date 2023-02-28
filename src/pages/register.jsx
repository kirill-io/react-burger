import styles from "./register.module.css";
import { RegisterForm } from "../components/RegisterForm/RegisterForm";

export const RegisterPage = () => {
  return (
    <div className={styles.container}>
      <RegisterForm />
    </div>
  )
};
