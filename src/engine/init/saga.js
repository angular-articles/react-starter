/* eslint-disable */
import { all, call } from 'redux-saga/effects';

// Watchers
import { watchersUser } from '../core/user/saga/watchers';

export function* saga() {
  yield all([
    call(watchersUser),
  ]);
}
