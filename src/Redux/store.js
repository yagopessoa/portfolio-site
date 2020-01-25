import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import ducks from './reducers';

const loggerMiddleware = createLogger();

const store = createStore(
  ducks,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;
