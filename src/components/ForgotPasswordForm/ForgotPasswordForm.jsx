import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./ForgotPasswordForm.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { forgotPassword } from "../../services/actions/login";
import { useForm } from "../../hooks/useForm";

export const ForgotPasswordForm = () => {
  const { values, handleChange } = useForm({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from || "/";

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    if (values.email) {
      dispatch(forgotPassword(values.email))
        .then(() =>
          navigate("/reset-password", { replace: true, state: fromPage })
        )
        .catch(() => alert("При восстановлении пароля произошла ошибка."));
    } else {
      alert("Заполните поле E-mail.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={onSubmitFormHandler}>
        <h2 className="text text_type_main-medium mt-0 mb-6">
          Восстановление пароля
        </h2>
        <Input
          type={"email"}
          placeholder={"Укажите E-mail"}
          onChange={(e) => handleChange(e)}
          value={values.email || ""}
          name={"email"}
          error={false}
          errorText={"Введите корректный e-mail"}
          size={"default"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Восстановить
        </Button>
        <div className="text text_type_main-default">
          <span className="mr-2">Вспомнили пароль?</span>
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};
