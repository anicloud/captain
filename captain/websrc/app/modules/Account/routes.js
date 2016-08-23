/**
 * Created by huangbin on 7/29/16.
 */

export default {
  path: 'account',
  component: require('./Account').default,
  indexRoute: {
    component: require('./AccountInfo/AccountInfo').default
  },
  childRoutes: [
    {
      path: 'app',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./AppAccount/AppAccount').default)
        });
      },
      indexRoute: {
        onEnter: (nextState, replace) => {
          if (!nextState.account || !nextState.account.isAppDeveloper) {
            // replace('/account/app/register');
          }
        },
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./AppAccount/AppAccountManager').default)
          });
        }
      },
      childRoutes: [
        {
          path: 'register',
          onEnter: (nextState, replace) => {
            if (nextState.account && nextState.account.isAppDeveloper) {
              replace('/account/app');
            }
          },
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./AppAccount/AppAccountRegister').default);
            });
          }
        }
      ]
    },
    {
      path: 'device',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./DeviceAccount/DeviceAccount').default)
        });
      },
      indexRoute: {
        onEnter: (nextState, replace) => {
          if (!nextState.account || !nextState.account.isDeviceDeveloper) {
            // replace('/account/device/register');
          }
        },
        getComponent: (nextState, cb) => {
          require.ensure([], (require) => {
            cb(null, require('./DeviceAccount/DeviceAccountManager').default)
          });
        }
      },
      childRoutes: [
        {
          path: 'register',
          onEnter: (nextState, replace) => {
            if (nextState.account && nextState.account.isDeviceDeveloper) {
              replace('/account/device');
            }
          },
          getComponent: (nextState, cb) => {
            require.ensure([], (require) => {
              cb(null, require('./DeviceAccount/DeviceAccountRegister').default);
            });
          }
        }
      ]
    }
  ]
};
