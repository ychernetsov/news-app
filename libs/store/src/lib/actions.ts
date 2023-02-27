
import { ThunkAction } from "redux-thunk";
import { Action } from "redux";
import { setNews, loadNews } from "./action-types";
//@ts-ignore
import { NewsItem, Store } from './models';

// export const getNewsAction = (): ThunkAction<void, Store, unknown, Action<string>> => {
//     return async (dispatch) => {

//         dispatch(loadNews(true));

//         // const response = await getNews();
//         const response = await axios.get('http://localhost:8000/news', {
//             headers: {
//             ContentType: 'application/json',
//             }
//         });
//         //@ts-ignore
//         const news: NewsItem[] = await response.json();

//         dispatch(setNews(news));
//     }
// }

export const getNews = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
    const resp = await fetch('http://localhost:8000/news', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const news: NewsItem[] = await resp.json();
    dispatch(setNews(news));
};
