export enum EActionType {
  SET_DATA = 'SET_DATA',
}

export interface IState {
  category: ICategoryItem | null;
  title: string;
  description: string;
  price: number;
  images: File[];
  additionalInformation: string;
}

export interface IAction {
  type: EActionType;
  payload: Partial<IState>;
}

export interface ICategoryItem {
  id: number;
  name: string;
  description: string;
}
