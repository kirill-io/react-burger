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
import { IIngredientData, IIngredientKey } from "../../utils/types";

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

  const findIngredients = (
    itemIngredient: string,
    initState: IIngredientData & IIngredientKey
  ) => {
    if (
      ingredientsAll.find(
        (item: IIngredientData) => item._id === itemIngredient
      )
    ) {
      return ingredientsAll.find(
        (item: IIngredientData) => item._id === itemIngredient
      );
    } else {
      return initState;
    }
  };

  const [, dropTarget] = useDrop({
    accept: "ingredient",
    drop(itemIngredient: { id: string; type: string }) {
      dispatch(selectionStart());
      dispatch(
        addingIngredient(
          itemIngredient.type,
          findIngredients(itemIngredient.id, selectedIngredients[0])
        )
      );
    },
  });

  const bun = selectedIngredients.find(
    (item: IIngredientData) => item.type === "bun"
  );
  const ingredients = selectedIngredients.filter(
    (item: IIngredientData) => item.type !== "bun"
  );

  const totalPrice = useMemo(() => {
    if (bun) {
      return (
        bun.price * 2 +
        ingredients.reduce(
          (acc: number, item: IIngredientData) => (acc += item.price),
          0
        )
      );
    }
  }, [bun, ingredients]);

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
    <T extends IIngredientData & IIngredientKey>(item: T, index: number) => {
      return (
        <ConstructorItem
          type={undefined}
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
              data={bun ? bun : selectedIngredients[0]}
              noIcon={true}
              onDelete={handleDeleteIngredient}
            />
            <li className={styles.constructor__item_center}>
              <ul className={styles.list}>
                {ingredients.map(
                  <T extends IIngredientData & IIngredientKey>(
                    item: T,
                    i: number
                  ) => renderIngredient(item, i)
                )}
              </ul>
            </li>
            <ConstructorItem
              type="bottom"
              isLocked={true}
              text=" (низ)"
              data={bun ? bun : selectedIngredients[0]}
              noIcon={true}
              onDelete={handleDeleteIngredient}
            />
          </ul>
          <ConstructorOrder
            totalPrice={totalPrice ? totalPrice : 0}
            onOpen={onOpen}
          />
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
