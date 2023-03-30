import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import styles from "./Feed.module.css";
import { OrderIngredientImage } from "../OrderIngredientImage/OrderIngredientImage";
import { Price } from "../Price/Price";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSort } from "../../hooks/useSort";
import { useTimeZone } from "../../hooks/useTimeZone";

import { testData } from "../../utils/testData";

export const Feed = () => {
  const { ingredients } = useSelector((store) => store.ingredients);

  const { id } = useParams();

  const orderData = testData.orders.find(item => item._id === id);

  const { orderIngredients, orderPrice } = useSort(orderData.ingredients, ingredients, false);

  const timeZone = useTimeZone(orderData.createdAt);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.order_id + " text text_type_digits-default mb-10"}>#{orderData._id}</p>
        <h2 className="text text_type_main-medium mb-3">{orderData.name}</h2>
        {
          orderData.status === "done" ?
            <p className={styles.done + " text text_type_main-default mb-10"}>Выполнен</p> :
            <p className="text text_type_main-default mb-10">В работе</p>
        }
        <h3 className="text text_type_main-medium mb-6">Состав:</h3>
        <div className={styles.list_container + " mb-10"}>
          <ul className={styles.list}>
            {orderIngredients.map(item => {
              return (
                <li key={uuid()} className={styles.item}>
                  <div className={styles.image_container}>
                    <OrderIngredientImage data={item} count={false} />
                  </div>
                  <p className={styles.title + " text text_type_main-default"}>{item.name}</p>
                  <Price price={item.price} count={item.count} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.info}>
          <div>
            <FormattedDate className="text text_type_main-default text_color_inactive" date={new Date(orderData.createdAt)} />
            <span className="text text_type_main-default text_color_inactive"> i-GMT{timeZone}</span>
          </div>
          <Price price={orderPrice} />
        </div>
      </div>
    </section>
  );
};
