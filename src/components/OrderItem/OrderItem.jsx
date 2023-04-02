import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { propTypesItem } from "../../utils/prop-types";
import styles from "./OrderItem.module.css";
import { Status } from "../Status/Status";
import { OrderIngredientsList } from "./OrderIngredientsList/OrderIngredientsList";
import { Price } from "../Price/Price";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSort } from "../../hooks/useSort";
import { useTimeZone } from "../../hooks/useTimeZone";

export const OrderItem = ({ data, itemWidth, status, to }) => {
  const { ingredients } = useSelector((store) => store.ingredients);

  const { orderIngredientsReverse, orderPrice } = useSort(
    data.ingredients,
    ingredients,
    true
  );

  const timeZone = useTimeZone(data.createdAt);

  return (
    <li>
      <Link
        to={to + `${data.number}`}
        className={styles.link + " p-6"}
        style={itemWidth}
        state={{ modal: true }}
      >
        <div className={styles.order_id}>
          <div className="text text_type_digits-default">#{data.number}</div>
          <div>
            <FormattedDate
              className="text text_type_main-default text_color_inactive"
              date={new Date(data.createdAt)}
            />
            <span className="text text_type_main-default text_color_inactive">
              {" "}
              i-GMT{timeZone}
            </span>
          </div>
        </div>
        <div className={styles.title_container}>
          <h3 className={styles.title + " text text_type_main-medium"}>
            {data.name}
          </h3>
          {status && <Status status={data.status} />}
        </div>
        <div className={styles.ingredients}>
          <OrderIngredientsList orderIngredients={orderIngredientsReverse} />
          <Price price={orderPrice} />
        </div>
      </Link>
    </li>
  );
};

OrderItem.propTypes = {
  data: propTypesItem,
  itemWidth: PropTypes.object.isRequired,
  status: PropTypes.bool.isRequired,
  to: PropTypes.string.isRequired,
};
