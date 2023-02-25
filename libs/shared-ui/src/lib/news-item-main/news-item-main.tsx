import styles from './news-item-main.module.scss';

/* eslint-disable-next-line */
export interface NewsItemMainProps {}

export function NewsItemMain(props: NewsItemMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewsItemMain!</h1>
    </div>
  );
}

export default NewsItemMain;
