import { Dispatch } from 'react';
import { IAction, IState } from '../../../store/interfaces';

export interface IAdditionalInformationStepProps {
  state: IState;
  dispatch: Dispatch<IAction>;
}
