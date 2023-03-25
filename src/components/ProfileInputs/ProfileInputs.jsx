import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ProfileInputs.module.css";
import {
  EmailInput,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import {
  getUserData,
  updateUserData,
} from "../../services/actions/getUserData";
import { updateName, updateLogin } from "../../services/actions/login";

export const ProfileInputs = () => {
  const { email, name } = useSelector((store) => store.login);
  const dispatch = useDispatch();

  const [submitButton, setSubmitButton] = useState(null);
  const [passwordValue, setPasswordValue] = useState("******");

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const onChangeName = (e) => {
    dispatch(updateName(e.target.value));
  };

  const onChangeLogin = (e) => {
    dispatch(updateLogin(e.target.value));
  };

  const onSubmitFormHandler = e => {
    e.preventDefault();
    if (submitButton === 'cancel') {
      dispatch(getUserData());
    } else if (submitButton === 'save') {
      dispatch(updateUserData());
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmitFormHandler}>
      <EmailInput
        onChange={onChangeName}
        value={name}
        name={"name"}
        placeholder={"Имя"}
        isIcon={true}
        extraClass="mb-6"
        error={false}
      />
      <EmailInput
        onChange={onChangeLogin}
        value={email}
        name={"login"}
        placeholder={"Логин"}
        isIcon={true}
        extraClass="mb-6"
        error={false}
      />
      <EmailInput
        onChange={(e) => setPasswordValue(e.target.value)}
        value={passwordValue}
        name={"prodilePassword"}
        placeholder="Пароль"
        isIcon={true}
        extraClass="mb-6"
        error={false}
      />
      <div className={styles.button}>
        <Button
          htmlType="submit"
          type="secondary"
          size="medium"
          onClick={() => setSubmitButton('cancel')}
        >
          Отмена
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          onClick={() => setSubmitButton('save')}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
