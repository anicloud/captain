/**
 * Created by huangbin on 7/29/16.
 */

export default {
  path: 'api',
  component: require('./Api').default,
  // indexRoute: {
    // component: require('./AccountInfo/AccountInfo').default
  // },
  indexRoute: {
    component: require('./ApiExplore').default
  },
  childRoutes: [
    {
      path: 'register',
      component: require('./ApiRegister').default,
      indexRoute: {
        component: require('./ApiRegisterApi').default
      },
      childRoutes: [
        {
          path: 'group',
          component: require('./ApiRegisterGroup').default
        }
      ]
    }
    // {
    //   path: 'app',
    //   getComponent: (nextState, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('./AppAccount/AppAccount').default)
    //     });
    //   },
    //   indexRoute: {
    //     onEnter: (nextState, replace) => {
    //       if (!nextState.account || !nextState.account.isAppDeveloper) {
    //         replace('/account/app/register');
    //       }
    //     },
    //     getComponent: (nextState, cb) => {
    //       require.ensure([], (require) => {
    //         cb(null, require('./AppAccount/AppAccountManager').default)
    //       });
    //     }
    //   },
    //   childRoutes: [
    //     {
    //       path: 'register',
    //       onEnter: (nextState, replace) => {
    //         if (nextState.account && nextState.account.isAppDeveloper) {
    //           replace('/account/app');
    //         }
    //       },
    //       getComponent: (nextState, cb) => {
    //         require.ensure([], (require) => {
    //           cb(null, require('./AppAccount/AppAccountRegister').default);
    //         });
    //       }
    //     }
    //   ]
    // }
  ]
};
