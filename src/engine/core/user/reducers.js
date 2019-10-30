import { Map } from 'immutable';
import { types } from './types';

const initialState = Map({
  data: null,
  isLoading: false,
});

export const userReducers = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.USER_LOGGING_IN:
      return state.set('isLoading', true);
    case types.USER_LOGGED_IN:
      return state.set('isLoading', false).set('data', payload);
    case types.USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
};
