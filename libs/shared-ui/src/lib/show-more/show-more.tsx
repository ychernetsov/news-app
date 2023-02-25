import styles from './show-more.module.scss';

/* eslint-disable-next-line */
export interface ShowMoreProps {}

export function ShowMore(props: ShowMoreProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ShowMore!</h1>
    </div>
  );
}

export default ShowMore;
