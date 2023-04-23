import { useEffect, useMemo, useCallback, FC } from "react";
import { useSelector, useDispatch } from "../../services/hooks";
import { useDrop } from "react-dnd";
import styles from "./BurgerConstructor.module.css";
import { ConstructorItem } from "../ConstructorItem/ConstructorItem";
import { ConstructorOrder } from "./ConstructorOrder/ConstructorOrder";
import { setIngredientsId } from "../../services/actions/orderDetails";
import {
  addingIngredient,
  deleteIngredient,
  moveIngredient,
} from "../../services/actions/burgerConstructor";
import { selectionStart } from "../../services/actions/getIngredients";
import { IIngredientData } from "../../utils/types";

interface IBurgerConstructorProps {
  onOpen: () => void;
}

export const BurgerConstructor: FC<IBurgerConstructorProps> = ({ onOpen }) => {
  const ingredientsAll = useSelector((store) => store.ingredients.ingredients);
  const selectionStarted = useSelector(
    (store) => store.ingredients.selectionStarted
  );
  const selectedIngredients = useSelector((store) => store.burgerConstructor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIngredientsId(ingredientsId()));
  }, [dispatch, selectedIngredients]); // eslint-disable-line

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemIngredient: IIngredientData) {
      dispatch(selectionStart());
      dispatch(
        addingIngredient(
          itemIngredient.type,
          ingredientsAll.find((item: IIngredientData) => item._id === itemIngredient.id)
        )
      );
    },
  });

  const bun = selectedIngredients.find((item: IIngredientData) => item.type === "bun");
  const ingredients = selectedIngredients.filter((item: IIngredientData) => item.type !== "bun");

  const totalPrice = useMemo(
    () =>
      bun.price * 2 + ingredients.reduce((acc: number, item: IIngredientData) => (acc += item.price), 0),
    [bun, ingredients]
  );

  const ingredientsId = () => {
    const id = selectedIngredients.map((item: IIngredientData) => item._id);
    id.push(selectedIngredients[0]._id);
    return id;
  };

  const handleDeleteIngredient = useCallback(
    (index: string) => {
      dispatch(deleteIngredient(index));
    },
    [dispatch]
  );

  const moveElement = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      dispatch(moveIngredient(dragIndex, hoverIndex));
    },
    [dispatch]
  );

  const renderIngredient = useCallback(
    (item: IIngredientData, index: number) => {
      return (
        <ConstructorItem
          type = {undefined}
          data={item}
          key={item.key}
          index={index}
          keyString={item.key}
          onDelete={handleDeleteIngredient}
          moveElement={moveElement}
        />
      );
    },
    [handleDeleteIngredient, moveElement]
  );

  return (
    <section
      className={styles.constructor__container + " pt-25 pl-4"}
      ref={dropTarget}
    >
      {selectionStarted && (
        <>
          <ul className={styles.constructor__list + " mb-10"}>
            <ConstructorItem
              type="top"
              isLocked={true}
              text=" (верх)"
              data={bun}
              noIcon={true}
              onDelete={handleDeleteIngredient}
            />
            <li className={styles.constructor__item_center}>
              <ul className={styles.list}>
                {ingredients.map((item: IIngredientData, i: number) => renderIngredient(item, i))}
              </ul>
            </li>
            <ConstructorItem
              type="bottom"
              isLocked={true}
              text=" (низ)"
              data={bun}
              noIcon={true}
              onDelete={handleDeleteIngredient}
            />
          </ul>
          <ConstructorOrder totalPrice={totalPrice} onOpen={onOpen} />
        </>
      )}
      {!selectionStarted && (
        <div className={styles.wrapper}>
          <p
            className={
              styles.text + " text text_type_main-medium text_color_inactive"
            }
          >
            Пожалуйста, для создания заказа перенесите сюда понравившиеся Вам
            булку и ингредиенты!
          </p>
        </div>
      )}
    </section>
  );
};
