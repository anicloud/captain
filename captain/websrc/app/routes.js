import React from 'react';
import Root from 'modules/Root';
import Dashboard from 'modules/Dashboard';
import {routes as accountRoutes} from 'modules/Account';
import {routes as appRoutes} from 'modules/Application';
import {routes as deviceRoutes} from 'modules/Device';
import {routes as apiRoutes} from 'modules/Api';
import {routes as debugRoutes} from 'modules/Debug';

export default (store) => {
  return {
    path: '/',
    component: Root,
    indexRoute: {
      component: Dashboard
    },
    childRoutes: [
      accountRoutes(store),
      appRoutes(store),
      deviceRoutes(store),
      apiRoutes(store),
      debugRoutes(store)
    ]
  };
}
