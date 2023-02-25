import { render } from '@testing-library/react';

import IconSvg from './icon-svg';

describe('IconSvg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconSvg />);
    expect(baseElement).toBeTruthy();
  });
});
