import Actions from './actions';

export const initialState = {
  category: null,
  title: '',
  description: '',
  price: 0,
  images: [],
  additionalInformation: '',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
