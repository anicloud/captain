/**
 * Created by huangbin on 6/25/16.
 */

import {createStore, applyMiddleware} from 'redux';
import {browserHistory} from 'react-router';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const router = routerMiddleware(browserHistory);

if (process.env.NODE_ENV == 'production') {
  module.exports = function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, router)
    )
  }
} else {
  const createLogger = require(`redux-logger`);
  const logger = createLogger();
  module.exports = function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, router, logger)
    )
  }

}
