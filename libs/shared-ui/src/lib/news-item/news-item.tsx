import styles from './news-item.module.scss';

/* eslint-disable-next-line */
export interface NewsItemProps {}

export function NewsItem(props: NewsItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewsItem!</h1>
    </div>
  );
}

export default NewsItem;
