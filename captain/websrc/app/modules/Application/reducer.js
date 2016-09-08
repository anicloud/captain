/**
 * Created by huangbin on 8/9/16.
 */

import * as t from './actions';
import {random, randomArray} from 'components/utils';
import keyBy from 'lodash.keyby';
import merge from 'lodash.merge';
import omit from 'lodash.omit';

const initialState = {
  products: {
    loaded: true,
    loading: false,
    message: '',
    entities: {
      '1': {
        productId: '1',
        name: 'sunny',
        description: '智能家居服务平台',
        type: 'smartHome',
        version: 1,
        installed: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '1472187978875',
        state: 'PUBLISHED',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png',
        home: 'http://sunny.anicloud.cn'
      },
      '2': {
        productId: '2',
        name: 'yi-health',
        version: 1,
        installed: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '1472187978875',
        state: 'DRAFT',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png',
        home: 'http://yihealth.anicloud.cn'
      },
      '3': {
        productId: '3',
        name: '逸生健康',
        version: 1,
        installed: 20,
        stars: 4,
        totalComments: 80,
        lastModTime: '1472187978875',
        state: 'DRAFT',
        logo: 'https://raw.githubusercontent.com/anicloud/anicloud.github.io/master/vi/logo/ani_logo.png',
        home: 'http://yihealth.anicloud.cn'
      }
    }
  },
  reports: {
    loading: false,
    entities: {
      '1': {
        productId: '1',
        today: {
          activeUsers: random(3000, 6000),
          installed: random(3000, 5000),
          launched: random(6000, 10000)
        },
        history: {
          activeUsers: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          launched: randomArray(6000, 10000, 7)
        }
      },
      '2': {
        productId: '2',
        today: {
          activeUsers: random(3000, 6000),
          installed: random(3000, 5000),
          launched: random(6000, 10000)
        },
        history: {
          activeUsers: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          launched: randomArray(6000, 10000, 7)
        }
      },
      '3': {
        productId: '3',
        today: {
          activeUsers: random(3000, 6000),
          installed: random(3000, 5000),
          launched: random(6000, 10000)
        },
        history: {
          activeUsers: randomArray(3000, 6000, 7),
          installed: randomArray(3000, 5000, 7),
          launched: randomArray(6000, 10000, 7)
        }
      }
    }
  }
};

function products(state, action) {
  switch (action.type) {
    case t.FETCH_PRODUCTS:
    {
      return Object.assign({}, state, {
        loading: true,
        entities: {},
        message: undefined
      });
    }
    case t.FETCH_PRODUCTS_SUCCESS:
    {
      return Object.assign({}, {
        loading: false,
        entities: keyBy(action.data, 'productId'),
        message: undefined
      });
    }
    case t.FETCH_PRODUCTS_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        message: action.message
      });
    }
    case t.SAVE_PRODUCT:
    {
      return Object.assign({}, state, {
        loading: true,
        message: undefined
      });
    }
    case t.SAVE_PRODUCT_SUCCESS:
    {
      let entities = merge({}, state.entities, keyBy([action.data], 'productId'));
      return Object.assign({}, {
        loading: false,
        entities: entities,
        message: undefined
      });
    }
    case t.SAVE_PRODUCT_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        message: action.message
      });
    }
      case t.DELETE_PRODUCT:
    {
      return Object.assign({}, state, {
        loading: true,
        message: undefined
      });
    }
    case t.DELETE_PRODUCT_SUCCESS:
    {
      return Object.assign({}, {
        loading: false,
        entities: omit(state.entities, [action.data]),
        message: undefined
      });
    }
    case t.DELETE_PRODUCT_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        message: action.message
      });
    }
    default:
      return state;
  }
}

function reports(state, action) {
  switch (action.type) {
    case t.FETCH_PRODUCT_REPORTS:
    {
      return Object.assign({}, state, {
        loading: true,
        message: undefined
      });
    }
    case t.FETCH_PRODUCT_REPORTS_SUCCESS:
    {
      const data = action.data;
      let entities = merge({}, state.entities, {[data.productId]: {
        [data.period]: data 
      }});
      return Object.assign({}, {
        loading: false,
        entities: entities,
        message: undefined
      });
    }
    case t.FETCH_PRODUCT_REPORTS_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        message: action.message
      });
    }
    default:
      return state;
  }
}

export default function (state = {
  products: {
    loaded: true,
    loading: false,
    message: '',
    entities: {}
  },
  reports: {
    loading: false,
    entities: {}
  }
}, action = {}) {
  return Object.assign({}, {
    products: products(state.products, action),
    reports: reports(state.reports, action)
  });
}