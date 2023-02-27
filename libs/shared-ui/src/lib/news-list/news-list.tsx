import styles from './news-list.module.scss';
import { NewsItemInterface } from '@data-snipper/store';
import { Button, Divider } from '@data-snipper/shared-ui';
import NewsItem from '../news-item/news-item';

/* eslint-disable-next-line */
export interface NewsListProps {
  news: NewsItemInterface[];
}

export function NewsList({ news }: NewsListProps) {
  return (
    <div className={styles['container']}>
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
