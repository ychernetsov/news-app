import { render } from '@testing-library/react';

import ShowMore from './show-more';

describe('ShowMore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShowMore />);
    expect(baseElement).toBeTruthy();
  });
});
