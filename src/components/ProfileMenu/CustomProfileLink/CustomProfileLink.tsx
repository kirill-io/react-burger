import { FC } from "react";
import styles from "./CustomProfileLink.module.css";

interface ICustomProfileLinkProps {
  children: string;
  onClick: () => void;
}

export const CustomProfileLink: FC<ICustomProfileLinkProps> = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={
        styles.link + " text text_type_main-medium text_color_inactive"
      }
    >
      {children}
    </div>
  );
};
