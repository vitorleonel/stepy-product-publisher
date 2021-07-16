import { Dispatch } from 'react';
import { IAction, IState } from '../../../store/interfaces';

export interface IPublishedStepProps {
  state: IState;
  dispatch: Dispatch<IAction>;
}
