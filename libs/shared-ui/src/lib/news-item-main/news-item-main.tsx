import { NewsItemInterface } from '@data-snipper/store';
import { Link } from 'react-router-dom';
import styles from './news-item-main.module.scss';

export function NewsItemMain({id, title}: Partial<NewsItemInterface>) {
  return (
    <li className={styles['list-item']}>
      <Link to={`/${id}`}>
      <span>{title}</span>
      </Link>
    </li>
  );
}

export default NewsItemMain;
