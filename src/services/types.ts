import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from '../index';
import { TBurgerConstructorActions } from './actions/burgerConstructor';
import { TGetIngredientsActions } from './actions/getIngredients';
import { TGetUserDataActions } from './actions/getUserData';
import { TLoginActions } from './actions/login';

type TApplicationActions =
  | TBurgerConstructorActions
  | TGetIngredientsActions
  | TGetUserDataActions
  | TLoginActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;
