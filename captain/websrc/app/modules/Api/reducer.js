/**
 * Created by huangbin on 8/15/16.
 */
import * as _ from 'lodash';
import * as t from './actions';

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
        inputArguments: [],
        outputArguments: []
      },
      '2': {
        functionId: '2',
        groupId: '1',
        name: 'powerOff',
        description: '关闭设备',
        returnType: 'void',
        inputArguments: [],
        outputArguments: []
      },
      '3': {
        functionId: '3',
        groupId: '5',
        name: 'getTemperature',
        description: '获取温度',
        returnType: 'void',
        inputArguments: [],
        outputArguments: [
          {name: 'temperature', type: 'integer'}
        ]
      },
      '4': {
        functionId: '4',
        groupId: '5',
        name: 'setTemperature',
        description: '设置温度',
        returnType: 'void',
        inputArguments: [
          {name: 'temperature', type: 'integer'}
        ],
        outputArguments: []
      },
      '5': {
        functionId: '5',
        groupId: '5',
        name: 'getHumidity',
        description: '获取湿度',
        returnType: 'void',
        inputArguments: [],
        outputArguments: [
          {name: 'humidity', type: 'integer'}
        ]
      },
      '6': {
        functionId: '6',
        groupId: '5',
        name: 'setHumidity',
        description: '设置湿度',
        returnType: 'void',
        inputArguments: [
          {name: 'temperature', type: 'integer'}
        ],
        outputArguments: []
      },
      '7': {
        functionId: '7',
        groupId: '5',
        name: 'getLux',
        description: '获取照明度',
        returnType: 'void',
        inputArguments: [],
        outputArguments: [
          {name: 'lux', type: 'integer'}
        ]
      },
      '8': {
        functionId: '8',
        groupId: '5',
        name: 'setLux',
        description: '设置照明度',
        returnType: 'void',
        inputArguments: [
          {name: 'lux', type: 'integer'}
        ],
        outputArguments: []
      }
    }
  }
};

function groups(state, action) {
  switch (action.type) {
    case t.REQUEST_API_GROUPS:
    {
      return _.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {},
        message: ''
      });
    }
    case t.REQUEST_API_GROUPS_SUCCESS:
    {
      return _.assign({}, state, {
        loading: true,
        loaded: false,
        entities: _.keyBy(action.data, 'deviceId'),
        message: ''
      });
    }
    case t.REQUEST_API_GROUPS_FAIL:
    {
      return _.assign({}, state, {
        loading: true,
        loaded: false,
        message: action.message,
        entities: {}
      });
    }
    default:
      return state
  }
}

function apiDetails(state, action) {
  switch (action.type) {
    case t.REQUEST_API_DETAILS:
    {
      return _.merge({}, state, {
        loading: true,
        message: ''
      })
    }
    case t.REQUEST_API_DETAILS_SUCCESS:
    {
      return _.merge({}, state, {
        loading: false,
        message: '',
        entities: _.keyBy(action.data, 'functionId')
      });
    }
    case t.REQUEST_API_DETAILS_FAIL:
    {
      return _.merge({}, state, {
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
    functions: apiDetails(state.functions, action)
  });
}