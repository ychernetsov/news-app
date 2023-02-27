// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { NewsMain } from '@data-snipper/news-main';
import { NewsTimeline } from '@data-snipper/news-timeline';
import { Store, getNewsAction } from '@data-snipper/store';

const getTimeInMs = (time: string): number => new Date(time).getTime();

export function FeatureMain() {
  const dispatch = useDispatch();
  const firstEffectRan = useRef(false)
  
  useEffect(() => {
    if (firstEffectRan.current) {
      //@ts-ignore
      dispatch(getNewsAction());    
    }
    return () => {
      firstEffectRan.current = true
    }    
  }, []);

  const news = useSelector((state: Store) => state.news);

  const sorted = news.sort((a, b) => a.popularity - b.popularity);
  const popular = sorted.slice(10);
  const rest = sorted.sort((a, b) => getTimeInMs(a.timestamp) - getTimeInMs(b.timestamp));

  return (
      <div className="app-layout">
        <NewsMain news={popular} />
        <NewsTimeline news={rest} />
      </div>
  );
}

export default FeatureMain;
