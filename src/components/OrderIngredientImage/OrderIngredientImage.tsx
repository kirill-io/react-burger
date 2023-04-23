import { FC } from "react";
import styles from "./OrderIngredientImage.module.css";
import { IIngredientData } from "../../utils/types";

interface IOrderIngredientImageProps {
  data: IIngredientData;
  count: boolean;
}

export const OrderIngredientImage: FC<IOrderIngredientImageProps> = ({ data, count }) => {
  if (data.count !== undefined) {
    if (data.count > 1 && count) {
      return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img
              className={styles.image}
              src={data.image_mobile}
              alt={data.name}
            />
            <div className={styles.wrapper_count}>
              <span className={styles.count + " text text_type_main-default"}>
                +{data.count}
              </span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <img
              className={styles.image}
              src={data.image_mobile}
              alt={data.name}
            />
          </div>
        </div>
      );
    }
  } else {
    return (
      <div></div>
    );
  }
};
