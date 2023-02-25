import styles from './news-timeline.module.scss';

/* eslint-disable-next-line */
export interface NewsTimelineProps {}

export function NewsTimeline(props: NewsTimelineProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NewsTimeline!</h1>
    </div>
  );
}

export default NewsTimeline;
