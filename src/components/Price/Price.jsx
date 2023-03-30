import styles from "./Price.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const Price = ({ price, count }) => {
  return (
    <div className={styles.price}>
      {count ?
        <span className="text text_type_digits-default">{count} x {price}</span> :
        <span className="text text_type_digits-default">{price}</span>
      }
      <CurrencyIcon type="primary" />
    </div>
  );
};
