// Instruments
import { types } from './types';
import { actionCreator } from '../../helpers/actionCreator';

export const userActions = Object.freeze({
  loading: () => actionCreator(types.USER_LOGGING_IN),
});
