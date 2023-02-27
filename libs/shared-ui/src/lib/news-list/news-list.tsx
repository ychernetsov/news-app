import styles from './news-list.module.scss';
import { NewsItemInterface } from '@data-snipper/store';
import { Button, Divider } from '@data-snipper/shared-ui';
import NewsItem from '../news-item/news-item';

const verticalPoints = {
  'xl': 1080,
  'lg': 900,
  'sm': 768
}

const getContainerHeight = (screenHeight: number): string => {
  if (screenHeight > verticalPoints.xl) {
    return '65%';
  }
  if (screenHeight >= verticalPoints.lg) {
    return '55rem';
  }

  if (screenHeight >= verticalPoints.sm) {
    return '42rem';
  }

  return '100%';
}

/* eslint-disable-next-line */
export interface NewsListProps {
  news: NewsItemInterface[];
}

export function NewsList({ news }: NewsListProps) {
  const screenHeight = window.screen.height;

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
          <NewsItem key={newsItem.id} item={newsItem} />
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
