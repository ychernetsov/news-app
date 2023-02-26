import { NewsItemMainInterface } from '@data-snipper/shared-ui';
import NewsItemMain from '../news-item-main/news-item-main';
import NewsItem from '../news-item/news-item';
import styles from './news-list-main.module.scss';



/* eslint-disable-next-line */
export interface NewsListMainProps {
  news: NewsItemMainInterface[];
}

export function NewsListMain({ news }: NewsListMainProps) {
  return (
    <div className={styles['container']}>
      <ul>
        {news.map(newsItem => 
          <NewsItemMain title={newsItem.title} />
        )}
      </ul>
    </div>
  );
}

export default NewsListMain;
