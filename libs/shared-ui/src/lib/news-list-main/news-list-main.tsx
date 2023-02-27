import NewsItemMain from '../news-item-main/news-item-main';
import { NewsItemInterface } from '@data-snipper/store';
import styles from './news-list-main.module.scss';



/* eslint-disable-next-line */
export interface NewsListMainProps {
  news: NewsItemInterface[];
}

export function NewsListMain({ news }: NewsListMainProps) {
  return (
    <div className={styles['container']}>
      <ul>
        {news.map(newsItem => 
          <NewsItemMain key={newsItem.id} id={newsItem.id} title={newsItem.title} />
        )}
      </ul>
    </div>
  );
}

export default NewsListMain;
