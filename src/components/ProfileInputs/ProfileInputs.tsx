import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import styles from "./ProfileInputs.module.css";
import {
  Input,
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

  const [submitButton, setSubmitButton] = useState<string | null>(null);
  const [passwordValue, setPasswordValue] = useState<string>("******");

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(e.target.value));
  };

  const onChangeLogin = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateLogin(e.target.value));
  };

  const onSubmitFormHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitButton === "cancel") {
      dispatch(getUserData());
    } else if (submitButton === "save") {
      dispatch(updateUserData());
    }
  };

  return (
    <form className={styles.container} onSubmit={onSubmitFormHandler}>
      <Input
        onChange={onChangeName}
        value={name}
        name={"name"}
        placeholder={"Имя"}
        icon={"EditIcon"}
        extraClass="mb-6"
        error={false}
      />
      <Input
        onChange={onChangeLogin}
        value={email}
        name={"login"}
        placeholder={"Логин"}
        icon={"EditIcon"}
        extraClass="mb-6"
        error={false}
      />
      <Input
        onChange={(e) => setPasswordValue(e.target.value)}
        value={passwordValue}
        name={"prodilePassword"}
        placeholder="Пароль"
        icon={"EditIcon"}
        extraClass="mb-6"
        error={false}
      />
      <div className={styles.button}>
        <Button
          htmlType="submit"
          type="secondary"
          size="medium"
          onClick={() => setSubmitButton("cancel")}
        >
          Отмена
        </Button>
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          onClick={() => setSubmitButton("save")}
        >
          Сохранить
        </Button>
      </div>
    </form>
  );
};
