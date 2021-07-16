import { render, fireEvent } from '@testing-library/react';

import StepNavigation from './StepNavigation';

describe('StepNavigation Component', () => {
  test('should render correctly with default texts', () => {
    const { container } = render(
      <StepNavigation prevHandler={jest.fn} nextHandler={jest.fn} />
    );

    expect(container).toMatchSnapshot();
  });

  test('should render correctly with custom texts', () => {
    const { container } = render(
      <StepNavigation
        prevText="Prev test"
        nextText="Next test"
        prevHandler={jest.fn}
        nextHandler={jest.fn}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should render correctly with custom next icon', () => {
    const { container } = render(
      <StepNavigation
        nextIcon="cog"
        prevHandler={jest.fn}
        nextHandler={jest.fn}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test('should call the functions by clicking the buttons', async () => {
    const prevHandler = jest.fn();
    const nextHandler = jest.fn();

    const { getByTestId } = render(
      <StepNavigation prevHandler={prevHandler} nextHandler={nextHandler} />
    );

    const prevButton = getByTestId('prevButton');
    const nextButton = getByTestId('nextButton');

    await fireEvent.click(prevButton);
    await fireEvent.click(nextButton);

    expect(prevHandler).toBeCalledTimes(1);
    expect(nextHandler).toBeCalledTimes(1);
  });
});
