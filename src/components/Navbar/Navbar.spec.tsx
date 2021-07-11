import { render } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('should render correctly', () => {
    const { container } = render(<Navbar />);

    expect(container).toMatchSnapshot();
  });
});
