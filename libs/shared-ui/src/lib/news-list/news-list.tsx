import styles from './news-list.module.scss';
import { NewsItemInterface } from '@data-snipper/store';
import { Button, Divider } from '@data-snipper/shared-ui';
import NewsItem from '../news-item/news-item';
import { useEffect } from 'react';

const verticalPoints = {
  'xl': 1080,
  'lg': 900,
  'md': 864,
  'sm': 768
}

const getContainerHeight = (screenHeight: number): string => {
  if (screenHeight > verticalPoints.xl) {
    return '85%';
  }
  if (screenHeight >= verticalPoints.lg) {
    return '65%';
  }
  if (screenHeight >= verticalPoints.md) {
    return '55%';
  }

  if (screenHeight >= verticalPoints.sm) {
    return '45%';
  }

  return '100%';
}

/* eslint-disable-next-line */
export interface NewsListProps {
  news: NewsItemInterface[];
}

export function NewsList({ news }: NewsListProps) {
  let screenHeight = window.screen.height;
  const handler = (e: any) => {
    screenHeight = e.target.screen.height;
    console.log(screenHeight)
  }
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    }
  }, [])
  return (
    <div className={styles['container']} style={{ maxHeight: getContainerHeight(screenHeight) }}>
      <ul className={styles['popular']}>
        {news.map(newsItem =>
          <NewsItem key={newsItem.id} item={newsItem} />
        )}
      </ul>

      <Divider />
      <Divider />


      <ul className={styles['rest']}>
        {news.map(newsItem =>
          <NewsItem item={newsItem} />
        )}
      </ul>

      <div className={styles['button-container']}>
        <Button text={'Show More'} />
      </div>

      <Divider />
    </div>
  );
}

export default NewsList;
