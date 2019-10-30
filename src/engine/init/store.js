import { createStore, applyMiddleware, compose } from 'redux';

import env from '../helpers/env';
import { middleware, sagaMiddleware, history } from './middleware';
import { reducers } from './reducers';
import { saga } from './saga';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = env.isDev() && devtools ? devtools : compose;

const store = createStore(
  reducers(history),
  composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(saga);

export { store };
