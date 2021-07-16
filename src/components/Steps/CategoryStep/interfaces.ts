import { Dispatch } from 'react';
import { IAction, IState } from '../../../store/interfaces';

export interface ICategoryStepProps {
  state: IState;
  dispatch: Dispatch<IAction>;
}
