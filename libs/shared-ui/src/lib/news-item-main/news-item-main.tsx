import { NewsItemInterface } from '@data-snipper/store';
import styles from './news-item-main.module.scss';

export function NewsItemMain({title}: Partial<NewsItemInterface>) {
  return (
    <li className={styles['list-item']}>
      <span>{title}</span>
    </li>
  );
}

export default NewsItemMain;
