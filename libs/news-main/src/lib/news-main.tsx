import styles from './news-main.module.scss';

import { Picture, NewsListMain } from '@data-snipper/shared-ui';
import { NewsItem } from '@data-snipper/store';

/* eslint-disable-next-line */
export interface NewsMainProps {
  news: NewsItem[];
}

export function NewsMain({ news }: NewsMainProps) {
  return (
    <>
    <div className={styles['container']}>
      <Picture src={'assets/main_image.webp'} caption={news[0]} alt={'alt'} />
      <NewsListMain news={news} />
    </div>
    </>
  );
}

export default NewsMain;
