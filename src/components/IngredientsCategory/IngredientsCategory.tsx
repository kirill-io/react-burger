import { FC } from "react";
import styles from "./IngredientsCategory.module.css";
import { IngredientItem } from "../IngredientItem/IngredientItem";
import { IIngredientData } from "../../utils/types";

interface IIngredientsCategoryProps {
  data: ReadonlyArray<IIngredientData>;
  title: string;
  goTo: HTMLHeadingElement | any;
}

export const IngredientsCategory: FC<IIngredientsCategoryProps> = ({ data, title, goTo }) => {
  return (
    <div id={data[0].type} className="ingredient__category">
      <h2 className="subtitle text text_type_main-medium" ref={goTo}>
        {title}
      </h2>
      <ul className={styles.ingredients__list + " pt-6 pl-4"}>
        {data.map((item) => {
          return <IngredientItem data={item} key={item._id} />;
        })}
      </ul>
    </div>
  );
};
