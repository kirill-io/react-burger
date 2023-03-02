import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import styles from "./RegisterForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getRegister } from "../../utils/burger-api";

export const RegisterForm = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIcon, setPasswordIcon] = useState('ShowIcon');
  const [passwordType, setPasswordType] = useState('password');

  const passwordRef = useRef(null);

  const onClick = () => {
    getRegister(emailValue, passwordValue, nameValue);
  };

  const onIconClick = () => {
    if (passwordRef.current.type === 'password') {
      setPasswordType('text');
      setPasswordIcon('HideIcon');
      passwordRef.current.focus();
    } else {
      setPasswordType('password');
      setPasswordIcon('ShowIcon');
      passwordRef.current.focus();
    }
  };

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
          type={passwordType}
          placeholder={'Пароль'}
          onChange={e => setPasswordValue(e.target.value)}
          icon={passwordIcon}
          value={passwordValue}
          name={'password'}
          error={false}
          ref={passwordRef}
          onIconClick={onIconClick}
          errorText={'Введите правильный пароль'}
          size={'default'}
          extraClass="mb-6"
        />
        <Button onClick={onClick} htmlType="button" type="primary" size="medium"  extraClass="mb-20">
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
