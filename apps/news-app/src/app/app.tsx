// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { NewsMain } from '@data-snipper/news-main';
import { NewsTimeline } from '@data-snipper/news-timeline';
import { Store, loadNews } from '@data-snipper/store';

export function App() {
  const dispatch = useDispatch();
  dispatch(loadNews(true))

  const news = useSelector((state: Store) => state.news);

  const sorted = news.sort((a, b) => a.popularity - b.popularity);
  const popular = sorted.slice(10);
  const rest = sorted.slice(11, sorted.length - 1);
  
  return (
    <>
    <div className="app-layout">
        <NewsMain news={popular} />
        <NewsTimeline news={rest} />
      </div>
    </>
  );
}

export default App;
