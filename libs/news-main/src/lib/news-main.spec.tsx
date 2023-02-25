import { render } from '@testing-library/react';

import NewsMain from './news-main';

describe('NewsMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsMain />);
    expect(baseElement).toBeTruthy();
  });
});
