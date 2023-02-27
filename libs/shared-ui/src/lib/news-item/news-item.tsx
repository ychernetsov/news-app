import styles from './news-item.module.scss';
import { Chevron } from '@data-snipper/icons';
import { Link } from 'react-router-dom';
import { NewsItemInterface } from '@data-snipper/store';

const getTime = (date: string | undefined): string => {
  if (!date) {
    return '';
  }
  const dateObject = new Date(date)
  const hours = dateObject.getHours();
  const minutes = dateObject.getMinutes();

   return `${hours}:${minutes}`;
};

export function NewsItem({ item }: { item: Partial<NewsItemInterface> }) {
  return (
    <li className={styles['list-item']}>
      <Link to={`/${item.id}`}>
      <div className={styles['content']}>
        <div className={styles['date']}>{getTime(item.timestamp)}</div>
        <div className={styles['title']}>{item.title}</div>
        <Chevron />
      </div>
      </Link>
    </li>
  );
}

export default NewsItem;
