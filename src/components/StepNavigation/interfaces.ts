export interface IStepNavigationProps {
  prevText?: string;
  nextText?: string;
  nextIcon?: string;
  nextDisabled?: boolean;
  prevHandler: () => void;
  nextHandler: () => void;
}
