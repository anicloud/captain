import React from 'react';
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import configureStore from './store/configureStore'
import routes from './routes'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
);