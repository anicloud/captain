/**
 * Created by huangbin on 7/29/16.
 */

export default (store) => {
  return {
    path: 'application',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./Application').default)
      });
    },
    // component: require('./Application').default,
    indexRoute: {
      onEnter: (nextState, replace) => replace('/application/products')
    },
    childRoutes: [
      {
        path: 'reports',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./AppReports').default)
          });
        }
        // component: require('./AppReports').default
      },
      {
        path: 'products',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./AppProducts').default)
          });
        },
        // component: require('./AppProducts').default,
        indexRoute: {
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./AppProductsList').default)
            });
          }
          // component: require('./AppProductsList').default
        },
        childRoutes: [
          {
            path: ':productId',
            getComponent: (nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./AppProductsDetails').default)
              });
            }
            // component: require('./AppProductsDetails').default
          }
        ]
      }
    ]
  }
};
