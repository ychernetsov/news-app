import styles from './news-main.module.scss';

import { Picture, NewsListMain } from '@data-snipper/shared-ui';
import { NewsItemInterface } from '@data-snipper/store';

/* eslint-disable-next-line */
export interface NewsMainProps {
  news: NewsItemInterface[];
}

export function NewsMain({ news }: NewsMainProps) {
  return (
    <>
    <div className={styles['container']}>
      <Picture src={'assets/main_image.webp'} caption={news[0]?.title} alt={'alt'} />
      <NewsListMain news={news} />
    </div>
    </>
  );
}

export default NewsMain;
