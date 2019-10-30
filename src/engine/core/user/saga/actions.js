import { asyncTypes } from './types';
import { actionCreator } from '../../../helpers/actionCreator';

export const userActionAsync = Object.freeze({
  signUp: (userData) => actionCreator(asyncTypes.SIGN_UP_ASYNC, userData),
  signIn: (signInData) => actionCreator(asyncTypes.SIGN_IN_ASYNC, signInData),
  setUserInfo: (userData) => actionCreator(asyncTypes.SET_USER_INFO, userData),
});
