import { FC } from "react";
import styles from "./Price.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

interface IPriceProps {
  price: number;
  count?: number;
}

export const Price: FC<IPriceProps> = ({ price, count }) => {
  return (
    <div className={styles.price}>
      {count ? (
        <span className="text text_type_digits-default">
          {count} x {price}
        </span>
      ) : (
        <span className="text text_type_digits-default">{price}</span>
      )}
      <CurrencyIcon type="primary" />
    </div>
  );
};
