import { render } from '@testing-library/react';

import NewsItemMain from './news-item-main';

describe('NewsItemMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsItemMain />);
    expect(baseElement).toBeTruthy();
  });
});
