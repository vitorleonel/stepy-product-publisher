import { IconName, MaybeElement } from '@blueprintjs/core';
export interface ViewProps {
  prevText?: string;
  nextText?: string;
  nextIcon?: IconName | MaybeElement;
  nextDisabled?: boolean;
  prevHandler: () => void;
  nextHandler: () => void;
}
