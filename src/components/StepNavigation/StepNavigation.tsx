import { Button } from "@blueprintjs/core";

import { ViewProps } from "./interfaces";

const StepNavigation = ({
  prevText,
  nextText,
  nextDisabled,
  prevHandler,
  nextHandler,
}: ViewProps) => {
  return (
    <div className="steps-item__navigation">
      <Button
        icon="arrow-left"
        text={prevText || 'Previous'}
        large
        onClick={prevHandler}
      />

      <Button
        rightIcon="arrow-right"
        text={nextText || 'Next'}
        large
        intent="primary"
        disabled={nextDisabled}
        onClick={nextHandler}
      />
    </div>
  );
}

export default StepNavigation;
