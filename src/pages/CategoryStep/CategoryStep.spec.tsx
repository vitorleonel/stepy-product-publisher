import { render, fireEvent } from "@testing-library/react";

import CategoryStep from "./CategoryStep";

describe('CategoryStep Component', () => {

  test('should call the functions by clicking the buttons', async () => {
    const openPanel = jest.fn();

    const { getByText } = render(<CategoryStep
      closePanel={jest.fn()}
      openPanel={openPanel}
    />);

    const firstCategory = getByText('Fashion');
    await fireEvent.click(firstCategory);

    expect(openPanel).toBeCalledTimes(1);
    expect(openPanel).toBeCalledWith(expect.objectContaining({ title: "BasicInformationStep" }));
  });

});
