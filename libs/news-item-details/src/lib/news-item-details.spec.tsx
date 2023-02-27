import { render } from '@testing-library/react';

import NewsItemDetails from './news-item-details';

describe('NewsItemDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsItemDetails />);
    expect(baseElement).toBeTruthy();
  });
});
