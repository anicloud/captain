import React from 'react';

export default {
  path: '/',
  component: require('./modules/Root').default,
  indexRoute: {
    component: require('./modules/Dashboard').default
  },
  childRoutes: [
    require('./modules/Account').routes,
    require('./modules/Application').routes,
    require('./modules/Device').routes,
    require('./modules/Api').routes,
    require('./modules/Debug').routes
  ]
};
