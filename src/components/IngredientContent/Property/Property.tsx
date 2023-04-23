import { FC } from "react";
import styles from "./Property.module.css";

interface IPropertyProps {
  title: string;
  value: number;
}

export const Property: FC<IPropertyProps> = ({ title, value }) => {
  return (
    <div
      className={
        styles.property + " text text_type_main-default text_color_inactive"
      }
    >
      <div className={styles.property__title}>{title}</div>
      <div className="text text_type_digits-default">{value}</div>
    </div>
  );
};
