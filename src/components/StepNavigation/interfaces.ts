export interface ViewProps {
  prevText?: string;
  nextText?: string;
  nextDisabled?: boolean;
  prevHandler: () => void;
  nextHandler: () => void;
}
