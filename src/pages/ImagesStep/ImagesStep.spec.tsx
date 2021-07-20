import { render, fireEvent, waitFor } from "@testing-library/react";

import ImagesStep from "./ImagesStep";

describe('ImagesStep Component', () => {

  const fakeCategory = {
    id: 1,
    name: 'Category',
    description: 'Description',
  };

  test('should render correctly', async () => {
    const { container } = render(<ImagesStep
      closePanel={jest.fn()}
      openPanel={jest.fn()}
      category={fakeCategory}
      title="Test"
      description="Test"
      price={100}
    />);

    expect(container).toMatchSnapshot();
  });

  test('should add images when I click on the "Click to add image(s)"', async () => {
    const openPanel = jest.fn();

    const { getByTestId, container } = render(<ImagesStep
      closePanel={jest.fn()}
      openPanel={openPanel}
      category={fakeCategory}
      title="Test"
      description="Test"
      price={100}
    />);

    const addImageField = container.querySelector('#add-image-field');
    const nextButton = getByTestId('nextButton');

    if(!addImageField) {
      throw new Error('Add image field not found.');
    }

    await waitFor(async () => {
      await fireEvent.change(addImageField, { target: {
        files: [new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })]
      }});

      await fireEvent.click(nextButton);
    });

    const lastAddedImage = container.querySelector('.images__item:not(.images__item--add)');

    expect(openPanel).toBeCalledTimes(1);
    expect(lastAddedImage).toBeInTheDocument();
  });

});
