import { IWsGetData } from "../../utils/types";
import { TWsActions } from "../actions/wsActions";

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
} from "../actions/wsActions";

export type TWsReducerState = {
  wsConnected: boolean;
  messages: ReadonlyArray<IWsGetData>;
};

const initialState: TWsReducerState = {
  wsConnected: false,
  messages: [],
};

export const wsReducer = (state = initialState, action: TWsActions): TWsReducerState => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };

    case WS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };

    case WS_GET_MESSAGE:
      return {
        ...state,
        messages: [{ ...action.payload }],
      };
    default:
      return state;
  }
};
