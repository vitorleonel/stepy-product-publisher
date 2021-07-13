import { render, fireEvent } from "@testing-library/react";

import PublishedStep from "./PublishedStep";

describe('PublishedStep Component', () => {

  const fakeCategory = {
    id: 1,
    name: 'Category',
    description: 'Description',
  };

  test('should call openPanel when clicking the button', async () => {
    const openPanel = jest.fn();

    const { getByText } = render(<PublishedStep
      closePanel={jest.fn()}
      openPanel={openPanel}
      category={fakeCategory}
      title="Test"
      description="Description"
      price={100}
      images={[]}
      additionalInformation=""
    />);

    const button = getByText('Add another product');
    await fireEvent.click(button);

    expect(openPanel).toBeCalledTimes(1);
    expect(openPanel).toBeCalledWith(expect.objectContaining({ title: "CategoryStep" }));
  });

});
