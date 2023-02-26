import styles from './news-item-main.module.scss';

export interface NewsItemMainInterface {
  // id: number;
  // popilarity: number;
  title: string;
  // timestamp: string;
}

/* eslint-disable-next-line */
export interface NewsItemMainProps {
  title: string;
}

export function NewsItemMain({title}: NewsItemMainProps) {
  return (
    <li className={styles['list-item']}>
      <span>{title}</span>
    </li>
  );
}

export default NewsItemMain;
