/**
 * Created by huangbin on 8/9/16.
 */

import * as t from './actions';

const initialState = {
  info: {
    loaded: false,
    loading: false,
    entity: {
      accountId: '1',
      name: 'Huang Bin',
      email: 'huangbin@anicloud.com',
      avatarUrl: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png',
      phoneNumber: '15050505050',
      appDeveloper: false,
      deviceDeveloper: false
    }
  },
  app: {
    loaded: false,
    loading: false,
    entity: {
      vendor: 'vendor',
      intro: 'intro',
      logo: '',
      home: 'http://example.com',
      creditCard: '6214****2323'
    }
  },
  device: {
    loaded: true,
    loading: false,
    entity: {
      vendor: 'vendor',
      intro: 'intro',
      logo: '',
      home: 'http://example.com',
      creditCard: '6214****2323'
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
        entity: {}
      });
    }
    case t.REQUEST_ACCOUNT_INFO_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entity: action.data
      });
    }
    case t.REQUEST_ACCOUNT_INFO_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entity: {}
      });
    }
    case t.DELETE_ACCOUNT_APP_SUCCESS:
    {
      let nextState = Object.assign({}, state);
      nextState.entity.appDeveloper = false;
      return nextState;
    }
    case t.DELETE_ACCOUNT_DEVICE_SUCCESS:
    {
      let nextState = Object.assign({}, state);
      nextState.entity.deviceDeveloper = false;
      return nextState;
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
        entity: {}
      });
    }
    case t.REQUEST_ACCOUNT_APP_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entity: action.data
      });
    }
    case t.REQUEST_ACCOUNT_APP_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entity: {}
      });
    }
    case t.DELETE_ACCOUNT_APP:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    }
    case t.DELETE_ACCOUNT_APP_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entity: {}
      });
    }
    case t.DELETE_ACCOUNT_APP_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    }
    case t.SAVE_ACCOUNT_APP:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    }
    case t.SAVE_ACCOUNT_APP_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entity: action.data
      });
    }
    case t.SAVE_ACCOUNT_APP_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    }
    default:
      return state;
  }
}


function device(state, action) {
  switch (action.type) {
    case t.REQUEST_ACCOUNT_DEVICE:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        entity: {}
      });
    }
    case t.REQUEST_ACCOUNT_DEVICE_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entity: action.data
      });
    }
    case t.REQUEST_ACCOUNT_DEVICE_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entity: {}
      });
    }
    case t.DELETE_ACCOUNT_DEVICE:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    }
    case t.DELETE_ACCOUNT_DEVICE_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        entity: {}
      });
    }
    case t.DELETE_ACCOUNT_DEVICE_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    }
    case t.SAVE_ACCOUNT_DEVICE:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false
      });
    }
    case t.SAVE_ACCOUNT_DEVICE_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entity: action.data
      });
    }
    case t.SAVE_ACCOUNT_DEVICE_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true
      });
    }
    default:
      return state;
  }
}

export default function (state = {
  info: {
    loaded: false,
    loading: false,
    entity: {}
  },
  app: {
    loaded: false,
    loading: false,
    entity: {}
  },
  device: {
    loaded: false,
    loading: false,
    entity: {}
  }
}, action = {}) {
  return Object.assign({}, state, {
    info: info(state.info, action),
    app: app(state.app, action),
    device: device(state.device, action)
  });
}