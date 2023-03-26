import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./SingInForm.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { getLogin } from "../../services/actions/login";
import { request } from "../../utils/burger-api";
import { deleteBearer, setCookie } from "../../utils/cookies";
import { useForm } from "../../hooks/useForm";

export const SingInForm = () => {
  const { values, handleChange } = useForm({});

  const [passwordIcon, setPasswordIcon] = useState("ShowIcon");
  const [passwordType, setPasswordType] = useState("password");

  const dispatch = useDispatch();
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || location.state || "/";

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    if (values.email && values.password) {
      request("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${values.email}`,
          password: `${values.password}`,
        }),
      })
        .then((res) => {
          setCookie("accessToken", deleteBearer(res.accessToken), 20);
          setCookie("refreshToken", res.refreshToken);
          setCookie("isAuthenticated", "true");
          dispatch(getLogin(res.user.email, res.user.name));
          navigate(`${fromPage}`, { replace: true });
        })
        .catch(() => alert("При авторизации произошла ошибка."));
    } else {
      alert("Заполните поля E-mail и пароль.");
    }
  };

  const onIconClick = () => {
    if (passwordRef.current.type === "password") {
      setPasswordType("text");
      setPasswordIcon("HideIcon");
      passwordRef.current.focus();
    } else {
      setPasswordType("password");
      setPasswordIcon("ShowIcon");
      passwordRef.current.focus();
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container} onSubmit={onSubmitFormHandler}>
        <h2 className="text text_type_main-medium mt-0 mb-6">Вход</h2>
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={(e) => handleChange(e)}
          value={values.email || ""}
          name={"email"}
          error={false}
          errorText={"Введите корректный e-mail"}
          size={"default"}
          extraClass="mb-6"
        />
        <Input
          type={passwordType}
          placeholder={"Пароль"}
          onChange={(e) => handleChange(e)}
          icon={passwordIcon}
          value={values.password || ""}
          name={"password"}
          error={false}
          ref={passwordRef}
          onIconClick={onIconClick}
          errorText={"Введите правильный пароль"}
          size={"default"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Войти
        </Button>
        <div className="text text_type_main-default mb-4">
          <span className="mr-2">Вы — новый пользователь?</span>
          <Link
            to="/register"
            state={{ from: fromPage }}
            className={styles.link}
          >
            Зарегистрироваться
          </Link>
        </div>
        <div className="text text_type_main-default">
          <span className="mr-2">Забыли пароль?</span>
          <Link
            to="/forgot-password"
            state={{ from: fromPage }}
            className={styles.link}
          >
            Восстановить пароль
          </Link>
        </div>
      </form>
    </div>
  );
};
