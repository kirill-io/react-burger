import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./CustomLink.module.css";

interface ICustomLinkProps {
  to: string;
  icon: ReactNode;
  style: string;
  children: string;
  state?: boolean;
}

export const CustomLink: FC<ICustomLinkProps> = ({
  to,
  icon,
  style,
  children,
  state,
}) => {
  return (
    <Link
      to={to}
      className={styles.link + " pt-4 pr-5 pb-4 pl-5"}
      state={state ? { modal: state } : null}
    >
      <div className="mr-2">{icon}</div>
      <span className={style}>{children}</span>
    </Link>
  );
};
