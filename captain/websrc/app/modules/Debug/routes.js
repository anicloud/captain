/**
 * Created by huangbin on 7/29/16.
 */

export default (store) => {
  return {
    path: 'debug',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        cb(null, require('./Debug').default)
      });
    }
    // component: require('./Debug').default
  };
}