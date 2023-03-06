import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom';
import styles from "./SingInForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const SingInForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIcon, setPasswordIcon] = useState('ShowIcon');
  const [passwordType, setPasswordType] = useState('password');

  const passwordRef = useRef(null);

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
      <form className={styles.container}>
        <h2 className="text text_type_main-medium mt-0 mb-6">Вход</h2>
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
        <Button htmlType="button" type="primary" size="medium"  extraClass="mb-20">
          Войти
        </Button>
        <div className="text text_type_main-default mb-4">
          <span className="mr-2">Вы — новый пользователь?</span>
          <Link to="/register" className={styles.link}>Зарегистрироваться</Link>
        </div>
        <div className="text text_type_main-default">
          <span className="mr-2">Забыли пароль?</span>
          <Link to="/forgot-password" className={styles.link}>Восстановить пароль</Link>
        </div>
      </form>
    </div>
  );
};
