import { NewsList } from '@data-snipper/shared-ui';

const news = [
  { title: 'The purpose of lorem ipsum is to create a natural looking block' },
  { title: 'from the layout. A practice not without controversy, laying out' },
  { title: 'pages with meaningless filler text can be very useful when the' }
]

export function NewsTimeline() {
  return (
    <NewsList news={news} />
  );
}

export default NewsTimeline;
