import { Dispatch } from 'react';
import { IAction, IState } from '../../../store/interfaces';

export interface IBasicInformationStep {
  state: IState;
  dispatch: Dispatch<IAction>;
}
