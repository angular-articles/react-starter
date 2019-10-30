import { Map } from 'immutable';
import { types } from './types';

const initialState = Map({
  loading: true,
});

export const uiReducers = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.LOADING: {
      return state.set('loading', payload);
    }
    default:
      return state;
  }
};
