/**
 * Created by huangbin on 7/29/16.
 */

export default {
  path: 'device',
  onEnter: (nextState, replace) => {
    if (!nextState.account || !nextState.account.isDeviceDeveloper) {
      // replace('/account/device/register');
    }
  },
  component: require('./Device').default,
  indexRoute: {
    onEnter: (nextState, replace) => replace('/device/products')
  },
  childRoutes: [
    {
      path: 'reports',
      component: require('./DeviceReports').default
    },
    {
      path: 'products',
      component: require('./DeviceProducts').default,
      indexRoute: {
        component: require('./DeviceProductsList').default
      },
      childRoutes: [
        {
          path: ':deviceId',
          component: require('./DeviceProductsDetails').default
        }
      ]
    }
  ]
};
