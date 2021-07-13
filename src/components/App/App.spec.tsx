import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  test('should render correctly', () => {
    const { container } = render(<App />);

    expect(container).toMatchSnapshot();
  });
});
