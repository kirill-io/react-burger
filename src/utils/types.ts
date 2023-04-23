export interface ICountItems {
  [name: string]: number;
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
  id?: string;
  count?: number;
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
  orders: ReadonlyArray<IWsOrders>;
  success: boolean;
  total: number;
  totalToday: number;
}
