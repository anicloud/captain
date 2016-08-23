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
        appId: '1',
        name: 'sunny',
        version: 1,
        installedCount: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '2016-08-01',
        state: '已发布',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png'
      },
      '2': {
        appId: '2',
        name: 'yi-health',
        version: 1,
        installedCount: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '2016-08-01',
        state: '未发布',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png'
      },
      '3': {
        appId: '3',
        name: '逸生健康',
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
        appId: '1',
        name: 'sunny',
        description: '智能家居服务平台',
        version: 1,
        type: 'smartHome',
        home: 'http://sunny.anicloud.cn'
      },
      '2': {
        appId: '2',
        name: 'yi-health',
        description: '智能健康服务平台',
        version: 1,
        type: 'smartHealth',
        home: 'http://yihealth.anicloud.cn'
      },
      '3': {
        appId: '3',
        name: '逸生健康',
        description: '智能健康服务平台',
        version: 1,
        type: 'smartHealth',
        home: 'http://yihealth.anicloud.cn'
      }
    }
  },
  reports: {
    loading: false,
    entities: {
      '1': {
        appId: '1',
        today: {
          activeUsers: random(3000, 6000),
          installed: random(3000, 5000),
          launched: random(6000, 10000)
        },
        week: {
          activeUsers: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          launched: randomArray(6000, 10000, 7)
        },
        month: {
          activeUsers: [],
          installed: [],
          launched: []
        },
        year: {
          activeUsers: [],
          installed: [],
          launched: []
        }
      },
      '2': {
        appId: '2',
        today: {
          activeUsers: random(3000, 6000),
          installed: random(3000, 5000),
          launched: random(6000, 10000)
        },
        week: {
          activeUsers: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          launched: randomArray(6000, 10000, 7)
        },
        month: {
          activeUsers: [],
          installed: [],
          launched: []
        },
        year: {
          activeUsers: [],
          installed: [],
          launched: []
        }
      },
      '3': {
        appId: '3',
        today: {
          activeUsers: random(3000, 6000),
          installed: random(3000, 5000),
          launched: random(6000, 10000)
        },
        week: {
          activeUsers: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          launched: randomArray(6000, 10000, 7)
        },
        month: {
          activeUsers: [],
          installed: [],
          launched: []
        },
        year: {
          activeUsers: [],
          installed: [],
          launched: []
        }
      }
    }
  }
};

function products(state, action) {
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case t.LOAD_APP:
    {
      nextState.loading = true;
      break;
    }
    case t.LOAD_APP_SUCCESS:
    {
      nextState.loading = false;
      nextState.loaded = true;
      break;
    }
    case t.LOAD_APP_FAIL:
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
    case t.LOAD_APP_DETAILS:
    {
      nextState.loading = true;
      break;
    }
    case t.LOAD_APP_DETAILS_SUCCESS:
    {
      nextState.loading = false;
      break;
    }
    case t.LOAD_APP_DETAILS_FAIL:
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
    case t.LOAD_APP_REPORTS:
    {
      nextState.loading = true;
      break;
    }
    case t.LOAD_APP_REPORTS_SUCCESS:
    {
      nextState.loading = false;
      break;
    }
    case t.LOAD_APP_REPORTS_FAIL:
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