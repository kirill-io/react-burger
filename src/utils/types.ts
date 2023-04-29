export interface ICountItems {
  [name: string]: number;
}
export interface IIngredientData {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  __v: number;
  _id: string;
}

export interface IIngredientKey {
  key: string;
}

export interface IIngredientCount {
  count: number;
}

export interface IWsOrders {
  createdAt: string;
  ingredients: Array<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface IWsGetData {
  orders: Array<IWsOrders>;
  success: boolean;
  total: number;
  totalToday: number;
}
