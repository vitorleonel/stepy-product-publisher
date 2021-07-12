import { Button } from "@blueprintjs/core";

import { ViewProps } from "./interfaces";

const StepNavigation = ({
  prevText,
  nextText,
  nextIcon,
  nextLoading,
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
        rightIcon={nextIcon || 'arrow-right'}
        text={nextText || 'Next'}
        large
        intent="success"
        loading={nextLoading}
        disabled={nextDisabled}
        onClick={nextHandler}
      />
    </div>
  );
}

export default StepNavigation;
