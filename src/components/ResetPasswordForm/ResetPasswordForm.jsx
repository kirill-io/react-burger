import React, { useState, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./ResetPasswordForm.module.css";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { request } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";
import { useForm } from "../../hooks/useForm";

export const ResetPasswordForm = () => {
  const { values, handleChange } = useForm({});

  const [passwordIcon, setPasswordIcon] = useState("ShowIcon");
  const [passwordType, setPasswordType] = useState("password");

  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state || "/";

  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    if (values.password && values.code) {
      request("/password-reset/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: `${values.password}`,
          token: `${values.code}`,
        }),
      })
        .then(() => {
          setCookie("forgotPassword", "false", -1);
          navigate("/login", { replace: true, state: fromPage });
        })
        .catch(() => alert("При восстановлении пароля произошла ошибка."));
    } else {
      alert("Заполните поле пароль и введите код из письма.");
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
        <h2 className="text text_type_main-medium mt-0 mb-6">
          Восстановление пароля
        </h2>
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
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={(e) => handleChange(e)}
          value={values.code || ""}
          name={"code"}
          error={false}
          errorText={"Введите корректный код из письма"}
          size={"default"}
          extraClass="mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass="mb-20"
        >
          Сохранить
        </Button>
        <div className="text text_type_main-default mb-4">
          <span className="mr-2">Вспомнили пароль?</span>
          <Link to="/login" className={styles.link}>
            Войти
          </Link>
        </div>
      </form>
    </div>
  );
};
