import styles from './news-list.module.scss';

/* eslint-disable-next-line */
export interface NewsListProps {}

export function NewsList(props: NewsListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewsList!</h1>
    </div>
  );
}

export default NewsList;
