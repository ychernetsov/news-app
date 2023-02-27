import { NewsList } from '@data-snipper/shared-ui';
import { NewsItem } from '@data-snipper/store';


/* eslint-disable-next-line */
export interface NewsTimelineProps {
  news: NewsItem[];
}

export function NewsTimeline({ news }: NewsTimelineProps) {
  return (
    <NewsList news={news} />
  );
}

export default NewsTimeline;
