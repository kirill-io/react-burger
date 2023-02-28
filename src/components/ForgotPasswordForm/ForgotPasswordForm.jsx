import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./ForgotPasswordForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const ForgotPasswordForm = () => {
  const [emailValue, setEmailValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
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
        <Button htmlType="button" type="primary" size="medium"  extraClass="mb-20">
          Восстановить
        </Button>
        <div className="text text_type_main-default">
          <span className="mr-2">Вспомнили пароль?</span>
          <Link to="/login" className={styles.link}>Войти</Link>
        </div>
      </div>
    </div>
  );
};
