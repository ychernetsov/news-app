import styles from './news-item.module.scss';
import { Chevron } from '@data-snipper/icons';

/* eslint-disable-next-line */
export interface NewsItemProps {
  title: string;
}

export function NewsItem({ title }: NewsItemProps) {
  return (
    <li className={styles['list-item']}>
      <div className={styles['content']}>
        <div className={styles['date']}>date</div>
        <div className={styles['title']}>{title}</div>
        <Chevron />
      </div>
    </li>
  );
}

export default NewsItem;
