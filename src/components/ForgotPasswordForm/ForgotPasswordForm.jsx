import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import styles from "./ForgotPasswordForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getForgotPasswordRequest } from "../../utils/burger-api";
import { setCookie } from "../../utils/cookies";


export const ForgotPasswordForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const navigate = useNavigate();

  const onClick = () => {
    if (emailValue) {
      getForgotPasswordRequest(emailValue)
      .then(() => {
        setCookie('forgotPassword', 'true');
        navigate('/reset-password', { replace: true });
      })
      .catch(() => alert("При восстановлении пароля произошла ошибка."));
    } else {
      alert("Заполните поле E-mail.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.container}>
        <h2 className="text text_type_main-medium mt-0 mb-6">Восстановление пароля</h2>
        <Input
          type={'email'}
          placeholder={'Укажите E-mail'}
          onChange={e => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          error={false}
          errorText={'Введите корректный e-mail'}
          size={'default'}
          extraClass="mb-6"
        />
        <Button onClick={onClick} htmlType="button" type="primary" size="medium"  extraClass="mb-20">
          Восстановить
        </Button>
        <div className="text text_type_main-default">
          <span className="mr-2">Вспомнили пароль?</span>
          <Link to="/login" className={styles.link}>Войти</Link>
        </div>
      </form>
    </div>
  );
};
