import { render, fireEvent } from "@testing-library/react";

import BasicInformationStep from "./BasicInformationStep";

describe('BasicInformationStep Component', () => {

  const fakeCategory = {
    id: 1,
    name: 'Category',
    description: 'Description',
  };

  test('should render correctly', async () => {
    const { container } = render(<BasicInformationStep
      closePanel={jest.fn()}
      openPanel={jest.fn()}
      category={fakeCategory}
    />);

    expect(container).toMatchSnapshot();
  });

  test('should be possible to fill in the fields and call openPanel function', async () => {
    const openPanel = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(<BasicInformationStep
      closePanel={jest.fn()}
      openPanel={openPanel}
      category={fakeCategory}
    />);

    const nextButton = getByTestId('nextButton');
    const titleField = getByPlaceholderText("Your product's title");
    const descriptionField = getByPlaceholderText("Your product's description");
    const priceField = getByPlaceholderText("Your product's price");

    await fireEvent.change(titleField, { target: { value: 'Test' } });
    await fireEvent.change(descriptionField, { target: { value: 'Test' } });
    await fireEvent.change(priceField, { target: { value: '1000' } });
    await fireEvent.click(nextButton);

    expect(titleField).toHaveValue('Test');
    expect(descriptionField).toHaveValue('Test');
    expect(priceField).toHaveValue('1,000');
    expect(openPanel).toBeCalledTimes(1);
  });

  test('should not be possible call openPanel function when I not fill fields', async () => {
    const openPanel = jest.fn();

    const { getByTestId } = render(<BasicInformationStep
      closePanel={jest.fn()}
      openPanel={openPanel}
      category={fakeCategory}
    />);

    const nextButton = getByTestId('nextButton');
    await fireEvent.click(nextButton);

    expect(openPanel).toBeCalledTimes(0);
  });

});
