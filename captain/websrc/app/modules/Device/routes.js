/**
 * Created by huangbin on 7/29/16.
 */

export default (store) => {
  return {
    path: 'device',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./Device').default)
      });
    },
    // component: require('./Device').default,
    indexRoute: {
      onEnter: (nextState, replace) => replace('/device/products')
    },
    childRoutes: [
      {
        path: 'reports',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./DeviceReports').default)
          });
        }
        // component: require('./DeviceReports').default
      },
      {
        path: 'products',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./DeviceProducts').default)
          });
        },
        // component: require('./DeviceProducts').default,
        indexRoute: {
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./DeviceProductsList').default)
            });
          }
          // component: require('./DeviceProductsList').default
        },
        childRoutes: [
          {
            path: ':productId',
            getComponent: (nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./DeviceProductsDetails').default)
              });
            }
            // component: require('./DeviceProductsDetails').default
          }
        ]
      }
    ]
  }
};
