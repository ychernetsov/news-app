import styles from './news-list.module.scss';
import { NewsItemMainInterface } from '@data-snipper/shared-ui';
import { Button, Divider } from '@data-snipper/shared-ui';
import NewsItem from '../news-item/news-item';

/* eslint-disable-next-line */
export interface NewsListProps {
  news: NewsItemMainInterface[];
}

export function NewsList({news}: NewsListProps) {
  return (
    <div className={styles['container']}>
      <ul className={styles['popular']}>
        {news.map(newsItem => 
          <NewsItem title={newsItem.title} />
        )}
      </ul>

      <Divider />
      <Divider />


      <ul className={styles['rest']}>
        {news.map(newsItem => 
          <NewsItem title={newsItem.title} />
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
