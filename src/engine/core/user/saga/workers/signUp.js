import { apply, put } from 'redux-saga/effects';

import { api, authService } from '../../../../config/api';
import { uiActions } from '../../../ui/actions';

export function* signUpWorker({ payload: userData }) {
  window.console.log(1);
  const response = yield apply(api, api.user.signUp, [userData]);
  window.console.log(3, response);
  if (response && response.status >= 200 && response.status < 300) {
    // eslint-disable-next-line no-unused-vars
    const { status, token, name } = response.data;
    switch (response.status) {
      case 200: {
        if (name) {
          yield apply(authService, authService.setToken, [name]);
          yield put(uiActions.loading(false));
        }
        break;
      }
      case 'error': {
        const { errors } = response.data;
        // TODO error action
        window.console.log(errors);
        break;
      }
      default: {
        break;
      }
    }
  }
}
