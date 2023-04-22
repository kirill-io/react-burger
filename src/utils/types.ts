export interface ICountItems {
  [name: string]: number;
}

export interface IIngredient  {
  calories: number;
  carbohydrates: number;
  count?: number;
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

export interface IIngredientData {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  key?: string;
}

interface IWsOrders {
  createdAt: string;
  ingredients: ReadonlyArray<string>;
  name: string;
  number: number;
  status: string;
  updatedAt: string;
  _id: string;
}

export interface IWsGetData {
  orders: ReadonlyArray<IWsOrders>;
  success: boolean;
  total: number;
  totalToday: number;
}
