import { render } from '@testing-library/react';

import NewsListMain from './news-list-main';

describe('NewsListMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsListMain />);
    expect(baseElement).toBeTruthy();
  });
});
