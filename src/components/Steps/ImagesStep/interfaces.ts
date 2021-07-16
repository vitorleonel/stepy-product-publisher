import { Dispatch } from 'react';
import { IAction, IState } from '../../../store/interfaces';

export interface IImagesStepProps {
  state: IState;
  dispatch: Dispatch<IAction>;
}
