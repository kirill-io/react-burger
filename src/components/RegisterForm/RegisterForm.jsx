import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./RegisterForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const RegisterForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className="text text_type_main-medium mt-0 mb-6">Регистрация</h2>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={e => setNameValue(e.target.value)}
          value={nameValue}
          name={'name'}
          error={false}
          errorText={'Введите корректное имя'}
          size={'default'}
          extraClass="mb-6"
        />
        <Input
          type={'email'}
          placeholder={'E-mail'}
          onChange={e => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          error={false}
          errorText={'Введите корректный e-mail'}
          size={'default'}
          extraClass="mb-6"
        />
        <Input
          type={'password'}
          placeholder={'Пароль'}
          onChange={e => setPasswordValue(e.target.value)}
          icon={'ShowIcon'}
          value={passwordValue}
          name={'password'}
          error={false}
          errorText={'Введите правильный пароль'}
          size={'default'}
          extraClass="mb-6"
        />
        <Button htmlType="button" type="primary" size="medium"  extraClass="mb-20">
          Зарегистрироваться
        </Button>
        <div className="text text_type_main-default">
          <span className="mr-2">Уже зарегистрированы?</span>
          <Link to="/login" className={styles.link}>Войти</Link>
        </div>
      </div>
    </div>
  );
};
