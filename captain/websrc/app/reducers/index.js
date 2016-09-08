/**
 * Created by huangbin on 6/25/16.
 */

import {combineReducers} from 'redux';
import {routerReducer as routing} from 'react-router-redux';
import {reducer as account} from 'modules/Account';
import {reducer as app} from 'modules/Application';
import {reducer as device} from 'modules/Device';
import {reducer as api} from 'modules/Api';
import {reducer as debug} from 'modules/Debug';

const rootReducer = combineReducers({
  routing,
  account,
  app,
  device,
  api,
  debug
});

export default rootReducer;

