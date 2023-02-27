import { NewsList } from '@data-snipper/shared-ui';
import { NewsItemInterface } from '@data-snipper/store';


/* eslint-disable-next-line */
export interface NewsTimelineProps {
  news: NewsItemInterface[];
}

export function NewsTimeline({ news }: NewsTimelineProps) {
  return (
    <NewsList news={news} />
  );
}

export default NewsTimeline;
