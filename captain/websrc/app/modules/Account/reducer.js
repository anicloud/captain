/**
 * Created by huangbin on 8/9/16.
 */

import * as t from './actions';

const initialState = {
  info: {
    loaded: true,
    loading: false,
    entity: {
      name: 'Huang Bin',
      email: 'huangbin@anicloud.com',
      avatarUrl: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png',
      isAppDeveloper: false,
      isDeviceDeveloper: false
    }
  },
  app: {
    loaded: true,
    loading: false,
    entity: {
      logoUrl: '',
      home: 'http://example.com',
      token: ''
    }
  },
  device: {
    loaded: true,
    loading: false,
    entity: {
      logoUrl: '',
      home: 'http://example.com',
      token: ''
    }
  }
};

function info(state, action) {
  switch (action.type) {
    case t.REQUEST_ACCOUNT_INFO:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {}
      });
    }
    case t.REQUEST_ACCOUNT_INFO_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: action.data
      });
    }
    case t.REQUEST_ACCOUNT_INFO_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entities: {}
      });
    }
    default:
      return state;
  }
}

function app(state, action) {
  switch (action.type) {
    case t.REQUEST_ACCOUNT_APP:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {}
      });
    }
    case t.REQUEST_ACCOUNT_APP_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: action.data
      });
    }
    case t.REQUEST_ACCOUNT_APP_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entities: {}
      });
    }
  }
}

function device(state, action) {
  switch (action.type) {
    case t.REQUEST_ACCOUNT_DEVICE:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {}
      });
    }
    case t.REQUEST_ACCOUNT_DEVICE_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: action.data
      });
    }
    case t.REQUEST_ACCOUNT_DEVICE_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entities: {}
      });
    }
  }
}

export default function (state = initialState, action = {}) {
  return Object.assign({}, state, {
    info: info(state.info, action),
    app: app(state.app, action),
    device: device(state.device, action)
  });
}