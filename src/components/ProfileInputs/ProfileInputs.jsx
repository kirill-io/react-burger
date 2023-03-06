import React, { useState } from "react";
import styles from "./ProfileInputs.module.css";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";


export const ProfileInputs = () => {
  const [nameValue, setNameValue] = useState('Марк');
  const [emailValue, setEmailValue] = useState('mail@stellar.burgers');
  const [passwordValue, setPasswordValue] = useState('******');

  const onChangeName = (e) => {
    setNameValue(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  return (
    <div className={styles.container}>
     <EmailInput
        onChange={onChangeName}
        value={nameValue}
        name={'prodileName'}
        placeholder="Имя"
        isIcon={true}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={onChangeEmail}
        value={emailValue}
        name={'prodileEmail'}
        placeholder="Логин"
        isIcon={true}
        extraClass="mb-6"
      />
      <EmailInput
        onChange={onChangePassword}
        value={passwordValue}
        name={'prodilePassword'}
        placeholder="Пароль"
        isIcon={true}
      />
    </div>
  );
};
