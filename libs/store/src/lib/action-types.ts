import { NewsItemInterface } from "./models";

export const LOADING_NEWS = "[NEWS] LOADING NEWS";
export const SET_NEWS= "[NEWS] SET NEWS";
export const ERROR_NEWS = "[NEWS] NEWS ERROR";

export type ActionTypes =
  | { type: typeof LOADING_NEWS; payload: boolean }
  | { type: typeof SET_NEWS; payload: NewsItemInterface[] }
  | { type: typeof ERROR_NEWS; payload: { message: string } }

export const loadNews = (value: boolean): ActionTypes => ({ type: LOADING_NEWS, payload: value });

export const setNews = (news: NewsItemInterface[]): ActionTypes => ({ type: SET_NEWS, payload: news });

export const setErrorNews = (error: { message: string }): ActionTypes => ({ type: ERROR_NEWS, payload: error });