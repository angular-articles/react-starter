import { combineReducers } from 'redux-immutablejs';
import { reducer as form } from 'redux-form/immutable';
import { connectRouter } from 'connected-react-router/immutable';

// Reducers
import { uiReducers as ui } from '../core/ui/reducers';
import { userReducers as user } from '../core/user/reducers';

const reducers = (history) => combineReducers({
  form,
  router: connectRouter(history),
  ui,
  user,
});

export { reducers };
