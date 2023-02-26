import styles from './news-main.module.scss';

import { Picture, NewsListMain } from '@data-snipper/shared-ui';

const news = [
  { title: 'The purpose of lorem ipsum is to create a natural looking block' },
  { title: 'from the layout. A practice not without controversy, laying out' },
  { title: 'pages with meaningless filler text can be very useful when the' }
]

export function NewsMain() {
  return (
    <>
    <div className={styles['container']}>
      <Picture src={'assets/main_image.webp'} caption={'some very long interesting caption'} alt={'alt'} />
      <NewsListMain news={news} />
    </div>
    </>
  );
}

export default NewsMain;
