import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router/immutable';
import createSagaMiddleware from 'redux-saga';
import env from '../helpers/env';

const history = createBrowserHistory();

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

const reactRouterMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const middleware = [reactRouterMiddleware, sagaMiddleware];

if (env.isDev()) {
  middleware.push(logger);
}

export { middleware, sagaMiddleware, history };
