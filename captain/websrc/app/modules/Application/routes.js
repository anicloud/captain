/**
 * Created by huangbin on 7/29/16.
 */

export default {
  path: 'application',
  onEnter: (nextState, replace) => {
    if (!nextState.account || !nextState.account.isAppDeveloper) {
      // replace('/account/app/register');
    }
  },
  component: require('./Application').default,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/application/products')
  },
  childRoutes: [
    {
      path: 'reports',
      component: require('./AppReports').default
    },
    {
      path: 'products',
      component: require('./AppProducts').default,
      indexRoute: {
        component: require('./AppProductsList').default
      },
      childRoutes: [
        {
          path: ':appId',
          component: require('./AppProductsDetails').default
        }
      ]
    }
  ]
};
