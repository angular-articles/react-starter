import { all, takeEvery } from 'redux-saga/effects';

import { asyncTypes } from './types';

// Workers
import { signUpWorker } from './workers/signUp';

function* watchSignUp() {
  yield takeEvery(asyncTypes.SIGN_UP_ASYNC, signUpWorker);
}

export function* watchersUser() {
  yield all([
    watchSignUp(),
  ]);
}
