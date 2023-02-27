
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { setNews, loadNews } from "./action-types";
//@ts-ignore
import { getNews } from '@data-snipper/core';
import { NewsItem, Store } from './models';

export const getNewsAction = (): ThunkAction<void, Store, unknown, Action<string>> => {
    return async (dispatch) => {

        dispatch(loadNews(true));

        const response = await getNews();
        const news: NewsItem[] = await response.json();

        dispatch(setNews(news));
    }
}
