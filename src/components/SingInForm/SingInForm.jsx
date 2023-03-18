import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import styles from "./SingInForm.module.css";
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { getLogin } from "../../services/actions/login";
import { getAuthorizationRequest } from "../../utils/burger-api";
import { deleteBearer, setCookie } from "../../utils/cookies";

export const SingInForm = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordIcon, setPasswordIcon] = useState('ShowIcon');
  const [passwordType, setPasswordType] = useState('password');

  const dispatch = useDispatch();
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const onClick = () => {
    if (emailValue && passwordValue) {
      getAuthorizationRequest(emailValue, passwordValue)
        .then((res) => {
          setCookie('accessToken', deleteBearer(res.accessToken), 20);
          setCookie('refreshToken', res.refreshToken);
          setCookie('isAuthenticated', 'true');
          dispatch(getLogin(res.user.email, res.user.name));
          navigate('/', { replace: true });
        })
        .catch(() => alert("При авторизации произошла ошибка."));
    } else {
      alert("Заполните поля E-mail и пароль.");
    }
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
        <Button onClick={onClick} htmlType="button" type="primary" size="medium"  extraClass="mb-20">
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
