// Instruments
import { types } from './types';
import { actionCreator } from '../../helpers/actionCreator';

export const uiActions = Object.freeze({
  loading: (status) => actionCreator(types.LOADING, status),
});
