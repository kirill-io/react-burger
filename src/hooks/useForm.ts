import { useState, ChangeEvent } from "react";

interface IInputItems {
  [name: string]: string;
}

export const useForm = (inputValues: IInputItems) => {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
};
