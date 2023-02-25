import { render } from '@testing-library/react';

import SvgButton from './svg-button';

describe('SvgButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SvgButton />);
    expect(baseElement).toBeTruthy();
  });
});
