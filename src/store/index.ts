import { EActionType, IAction, IState } from './interfaces';

export const initialState: IState = {
  category: null,
  title: '',
  description: '',
  price: 0,
  images: [],
  additionalInformation: '',
};

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case EActionType.SET_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
