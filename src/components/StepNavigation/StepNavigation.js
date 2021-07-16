import Button from '../Button';

const StepNavigation = ({
  prevText,
  nextText,
  nextIcon,
  nextDisabled,
  prevHandler,
  nextHandler,
}) => {
  return (
    <div className="steps-item__navigation">
      <Button
        leftIcon="arrow-back-outline"
        text={prevText || 'Previous'}
        type="secondary"
        onClick={prevHandler}
        data-testid="prevButton"
      />

      <Button
        rightIcon={nextIcon || 'arrow-forward-outline'}
        text={nextText || 'Next'}
        type="primary"
        disabled={nextDisabled}
        onClick={nextHandler}
        data-testid="nextButton"
      />
    </div>
  );
};

export default StepNavigation;
