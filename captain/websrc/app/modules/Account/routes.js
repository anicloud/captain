/**
 * Created by huangbin on 7/29/16.
 */
export default (store) => {

  return {
    path: 'account',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./Account').default)
      })
    },
    // component: require('./Account').default,
    indexRoute: {
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./AccountInfo/AccountInfo').default)
        })
      },
      // component: require('./AccountInfo/AccountInfo').default
    },
    childRoutes: [
      {
        path: 'app',
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./AccountApp/AccountApp').default)
          })
        },
        // component: require('./AccountApp/AccountApp').default,
        indexRoute: {
          // component: require('./AccountApp/AccountAppSettings').default,
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./AccountApp/AccountAppSettings').default)
            })
          }
        },
        childRoutes: [
          {
            path: 'register',
            // component: require('./AccountApp/AccountAppRegister').default,
            getComponent: (nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./AccountApp/AccountAppRegister').default)
              })
            }
          }
        ]
      },
      {
        path: 'device',
        // component: require('./AccountDevice/AccountDevice').default,
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./AccountDevice/AccountDevice').default)
          });
        },
        indexRoute: {
          // component: require('./AccountDevice/AccountDeviceSettings').default,
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./AccountDevice/AccountDeviceSettings').default)
            });
          }
        },
        childRoutes: [
          {
            path: 'register',
            // component: require('./AccountDevice/AccountDeviceRegister').default,
            getComponent: (nextState, cb) => {
              require.ensure([], (require) => {
                cb(null, require('./AccountDevice/AccountDeviceRegister').default);
              });
            }
          }
        ]
      }
    ]
  };
}