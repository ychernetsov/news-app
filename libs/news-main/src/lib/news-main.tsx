import styles from './news-main.module.scss';

/* eslint-disable-next-line */
export interface NewsMainProps {
  title: string;
}

export function NewsMain(props: NewsMainProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewsMain!</h1>
    </div>
  );
}

export default NewsMain;
