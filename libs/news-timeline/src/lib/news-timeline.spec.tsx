import { render } from '@testing-library/react';

import NewsTimeline from './news-timeline';

describe('NewsTimeline', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NewsTimeline />);
    expect(baseElement).toBeTruthy();
  });
});
