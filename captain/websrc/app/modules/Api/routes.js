/**
 * Created by huangbin on 7/29/16.
 */

export default (store) => {
  return {
    path: 'api',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./Api').default)
      })
    },
    // component: require('./Api').default,
    indexRoute: {
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./ApiExplore').default)
        })
      }
      // component: require('./ApiExplore').default
    },
    childRoutes: [
      {
        path: 'register',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./ApiRegister').default)
          })
        },
        component: require('./ApiRegister').default,
        indexRoute: {
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./ApiRegisterApi').default)
            })
          }
          // component: require('./ApiRegisterApi').default
        },
        childRoutes: [
          {
            path: 'group',
            getComponent: (nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./ApiRegisterGroup').default)
              })
            }
            // component: require('./ApiRegisterGroup').default
          }
        ]
      }
    ]
  };
}

