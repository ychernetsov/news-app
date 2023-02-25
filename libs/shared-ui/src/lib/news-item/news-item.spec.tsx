import { render } from '@testing-library/react';

import NewsItem from './news-item';

describe('NewsItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsItem />);
    expect(baseElement).toBeTruthy();
  });
});
