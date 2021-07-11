import { render, screen } from "@testing-library/react";

import StepHeader from "./StepHeader";

describe('StepHeader Component', () => {

  test('should render correctly when pass all props', () => {
    render(<StepHeader title="Title test" description="Description test" />);

    expect(screen.getByText(/Title test/)).toBeInTheDocument();
    expect(screen.getByText(/Description test/)).toBeInTheDocument();
  });

});
