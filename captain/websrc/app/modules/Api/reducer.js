/**
 * Created by huangbin on 8/15/16.
 */
import * as t from './actions';
import keyBy from 'lodash.keyby';
import merge from 'lodash.merge';

const initialState = {
  groups: {
    loaded: true,
    loading: false,
    message: '',
    entities: {
      '1': {
        groupId: '1', name: 'Power',
        functions: [
          {functionId: '1', groupId: '1', name: 'powerOn', description: '打开电源'},
          {functionId: '2', groupId: '1', name: 'powerOff', description: '关闭电源'}
        ]
      },
      '2': {
        groupId: '2', name: 'Bluetooth',
        functions: []
      },
      '3': {
        groupId: '3', name: 'ZigBee',
        functions: []
      },
      '4': {
        groupId: '4', name: 'Infrared',
        functions: []
      },
      '5': {
        groupId: '5', name: 'Sensor',
        functions: [
          {functionId: '3', groupId: '5', name: 'getTemperature', description: '获取温度'},
          {functionId: '4', groupId: '5', name: 'setTemperature', description: '设置温度'},
          {functionId: '5', groupId: '5', name: 'getHumidity', description: '获取湿度'},
          {functionId: '6', groupId: '5', name: 'setHumidity', description: '设置湿度'},
          {functionId: '7', groupId: '5', name: 'getLux', description: '获取照明度'},
          {functionId: '8', groupId: '5', name: 'setLux', description: '设置照明度'}
        ]
      }
    }
  },
  functions: {
    loading: false,
    message: '',
    entities: {
      '1': {
        functionId: '1',
        groupId: '1',
        name: 'powerOn',
        description: '打开设备',
        returnType: 'void',
        input: [],
        output: []
      },
      '2': {
        functionId: '2',
        groupId: '1',
        name: 'powerOff',
        description: '关闭设备',
        returnType: 'void',
        input: [],
        output: []
      },
      '3': {
        functionId: '3',
        groupId: '5',
        name: 'getTemperature',
        description: '获取温度',
        returnType: 'void',
        input: [],
        output: [
          {name: 'temperature', type: 'integer'}
        ]
      },
      '4': {
        functionId: '4',
        groupId: '5',
        name: 'setTemperature',
        description: '设置温度',
        returnType: 'void',
        input: [
          {name: 'temperature', type: 'integer'}
        ],
        output: []
      },
      '5': {
        functionId: '5',
        groupId: '5',
        name: 'getHumidity',
        description: '获取湿度',
        returnType: 'void',
        input: [],
        output: [
          {name: 'humidity', type: 'integer'}
        ]
      },
      '6': {
        functionId: '6',
        groupId: '5',
        name: 'setHumidity',
        description: '设置湿度',
        returnType: 'void',
        input: [
          {name: 'temperature', type: 'integer'}
        ],
        output: []
      },
      '7': {
        functionId: '7',
        groupId: '5',
        name: 'getLux',
        description: '获取照明度',
        returnType: 'void',
        input: [],
        output: [
          {name: 'lux', type: 'integer'}
        ]
      },
      '8': {
        functionId: '8',
        groupId: '5',
        name: 'setLux',
        description: '设置照明度',
        returnType: 'void',
        input: [
          {name: 'lux', type: 'integer'}
        ],
        output: []
      }
    }
  }
};

function groups(state, action) {
  switch (action.type) {
    case t.FETCH_API_GROUPS:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {},
        message: ''
      });
    }
    case t.FETCH_API_GROUPS_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: keyBy(action.data, 'deviceId'),
        message: ''
      });
    }
    case t.FETCH_API_GROUPS_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: false,
        message: action.message,
        entities: {}
      });
    }
    default:
      return state
  }
}

function apis(state, action) {
  switch (action.type) {
    case t.FETCH_API_DETAILS:
    {
      return Object.assign({}, state, {
        loading: true,
        message: ''
      })
    }
    case t.FETCH_API_DETAILS_SUCCESS:
    {
      return merge({}, state, {
        loading: false,
        message: '',
        entities: keyBy(action.data, 'functionId')
      });
    }
    case t.FETCH_API_DETAILS_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
        message: action.message
      })
    }
    default:
      return state;
  }
}

export default function (state = initialState, action = {}) {
  return Object.assign({}, {
    groups: groups(state.groups, action),
    functions: apis(state.functions, action)
  });
}