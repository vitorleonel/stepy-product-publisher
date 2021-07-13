import { render, fireEvent } from "@testing-library/react";

import AdditionalInformationStep from "./AdditionalInformationStep";

describe('AdditionalInformationStep Component', () => {

  const fakeCategory = {
    id: 1,
    name: 'Category',
    description: 'Description',
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  test('should render correctly', async () => {
    const { container } = render(<AdditionalInformationStep
      closePanel={jest.fn()}
      openPanel={jest.fn()}
      category={fakeCategory}
      title="Test"
      description="Test"
      price={100}
      images={[]}
    />);

    expect(container).toMatchSnapshot();
  });

  test('should be possible to fill in the fields and call openPanel function', async () => {
    const openPanel = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(<AdditionalInformationStep
      closePanel={jest.fn()}
      openPanel={openPanel}
      category={fakeCategory}
      title="Test"
      description="Test"
      price={100}
      images={[]}
    />);

    const nextButton = getByTestId('nextButton');
    const additionalInformationField = getByPlaceholderText("Your product's extra information");

    await fireEvent.change(additionalInformationField, { target: { value: 'Test' } });
    await fireEvent.click(nextButton);

    jest.runOnlyPendingTimers();

    expect(additionalInformationField).toHaveValue('Test');
    expect(openPanel).toBeCalledTimes(1);
  });

  test('should be possible call openPanel function when I not fill fields', async () => {
    const openPanel = jest.fn();

    const { getByTestId } = render(<AdditionalInformationStep
      closePanel={jest.fn()}
      openPanel={openPanel}
      category={fakeCategory}
      title="Test"
      description="Test"
      price={100}
      images={[]}
    />);

    const nextButton = getByTestId('nextButton');
    await fireEvent.click(nextButton);

    jest.runOnlyPendingTimers();

    expect(openPanel).toBeCalledTimes(1);
  });

});
