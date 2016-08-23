/**
 * Created by huangbin on 8/9/16.
 */

import * as t from './actions';
import {random, randomArray} from '../../components/utils';

const initialState = {
  products: {
    loaded: true,
    loading: false,
    message: '',
    entities: {
      '1': {
        deviceId: '1',
        name: '空调',
        version: 1,
        installedCount: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '2016-08-01',
        state: '已发布',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png'
      },
      '2': {
        deviceId: '2',
        name: '热水器',
        version: 1,
        installedCount: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '2016-08-01',
        state: '未发布',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png'
      },
      '3': {
        deviceId: '3',
        name: '台灯',
        version: 1,
        installedCount: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '2016-08-01',
        state: '未发布',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png'
      }
    }
  },
  details: {
    loading: false,
    entities: {
      '1': {
        deviceId: '1',
        name: '空调',
        description: 'xx智能空调',
        version: 1,
        type: 'smartHome',
        home: 'http://example.com'
      },
      '2': {
        deviceId: '2',
        name: '热水器',
        description: 'xx智能热水器',
        version: 1,
        type: 'smartHome',
        home: 'http://example.com'
      },
      '3': {
        deviceId: '3',
        name: '台灯',
        description: 'xx智能台灯',
        version: 1,
        type: 'smartHome',
        home: 'http://example.com'
      }
    }
  },
  reports: {
    loading: false,
    entities: {
      '1': {
        deviceId: '1',
        today: {
          activated: random(3000, 6000),
          installed: random(3000, 5000),
          connected: random(6000, 10000)
        },
        week: {
          activated: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          connected: randomArray(6000, 10000, 7)
        },
        month: {
          activated: [],
          installed: [],
          connected: []
        },
        year: {
          activated: [],
          installed: [],
          connected: []
        }
      },
      '2': {
        deviceId: '2',
        today: {
          activated: random(3000, 6000),
          installed: random(3000, 5000),
          connected: random(6000, 10000)
        },
        week: {
          activated: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          connected: randomArray(6000, 10000, 7)
        },
        month: {
          activated: [],
          installed: [],
          connected: []
        },
        year: {
          activated: [],
          installed: [],
          connected: []
        }
      },
      '3': {
        deviceId: '3',
        today: {
          activated: random(3000, 6000),
          installed: random(3000, 5000),
          connected: random(6000, 10000)
        },
        week: {
          activated: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          connected: randomArray(6000, 10000, 7)
        },
        month: {
          activated: [],
          installed: [],
          connected: []
        },
        year: {
          activated: [],
          installed: [],
          connected: []
        }
      }
    }
  }
};

function products(state, action) {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case t.LOAD_DEVICE:
    {
      nextState.loading = true;
      break;
    }
    case t.LOAD_DEVICE_SUCCESS:
    {
      nextState.loading = false;
      nextState.loaded = true;
      break;
    }
    case t.LOAD_DEVICE_FAIL:
    {
      nextState.loading = true;
      break;
    }
    default:
  }
  return nextState;
}

function details(state, action) {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case t.LOAD_DEVICE_DETAILS:
    {
      nextState.loading = true;
      break;
    }
    case t.LOAD_DEVICE_DETAILS_SUCCESS:
    {
      nextState.loading = false;
      break;
    }
    case t.LOAD_DEVICE_DETAILS_FAIL:
    {
      nextState.loading = false;
      break;
    }
    default:
  }
  return nextState;
}

function reports(state, action) {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case t.LOAD_DEVICE_REPORTS:
    {
      nextState.loading = true;
      break;
    }
    case t.LOAD_DEVICE_REPORTS_SUCCESS:
    {
      nextState.loading = false;
      break;
    }
    case t.LOAD_DEVICE_REPORTS_FAIL:
    {
      nextState.loading = false;
      break;
    }
    default:
  }
  return nextState;
}

export default function (state = initialState, action = {}) {
  return Object.assign({}, {
    products: products(state.products, action),
    details: details(state.details, action),
    reports: reports(state.reports, action)
  });
}