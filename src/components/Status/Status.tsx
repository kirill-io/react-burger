import { FC } from "react";
import styles from "./Status.module.css";

interface IStatusProps {
  status: string;
}

export const Status: FC<IStatusProps> = ({ status }) => {
  if (status === "done") {
    return (
      <p className={styles.done + " text text_type_main-default"}>Выполнен</p>
    );
  } else if (status === "created") {
    return <p className="text text_type_main-default">В работе</p>;
  } else if (status === "pending") {
    return <p className="text text_type_main-default">В ожидании</p>;
  } else {
    return <p className="text text_type_main-default"></p>;
  }
};
