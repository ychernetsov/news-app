import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  ActionTypes,
  LOADING_NEWS,
  SET_NEWS,
  ERROR_NEWS
} from "./action-types";
import { Store } from "./models";

function newsReducer(
  state: Store = {
    news: [],
    loading: null,
    error: null
  },
  action: ActionTypes
) {
  switch (action.type) {
    case LOADING_NEWS:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case ERROR_NEWS:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const newsStore = createStore(newsReducer, applyMiddleware(thunk));
