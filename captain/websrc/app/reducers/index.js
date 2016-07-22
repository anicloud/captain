/**
 * Created by huangbin on 6/25/16.
 */

import {combineReducers} from 'redux'
import {routerReducer as routing} from 'react-router-redux'
import merge from 'lodash/merge'
import union from 'lodash/union'

import * as ActionTypes from '../actions'


const devicesMock = [
  {
    name: '公司控制中心',
    deviceId: '10001',
    physicalId: 'm0001',
    physicalAddress: '00-11-22-33-44',
    description: '德润大厦302控制中心',
    avatarUrl: '',
    vendor: '松下',
    version: 1,
    state: 'Active',
    functions: [
      {
        functionId: '1',
        groupId: '1'
      },
      {
        functionId: '2',
        groupId: '1'
      }
    ],
    slaves: [
      {
        physicalId: 's001',
        physicalAddress: '',
        name: '东侧中央空调',
        description: '东侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '1',
        masterId: '-1'
      },
      {
        physicalId: 's002',
        physicalAddress: '',
        name: '西侧中央空调',
        description: '西侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '2',
        masterId: '-1'
      }
    ]
  },
  {
    name: '公司控制中心',
    deviceId: '10002',
    physicalId: 'm0001',
    physicalAddress: '00-11-22-33-44',
    description: '德润大厦302控制中心',
    avatarUrl: '',
    vendor: '松下',
    version: 1,
    state: 'Active',
    functions: [
      {
        functionId: '1',
        groupId: '1'
      },
      {
        functionId: '2',
        groupId: '1'
      }
    ],
    slaves: [
      {
        physicalId: 's001',
        physicalAddress: '',
        name: '东侧中央空调',
        description: '东侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '1',
        masterId: '-1'
      },
      {
        physicalId: 's002',
        physicalAddress: '',
        name: '西侧中央空调',
        description: '西侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '2',
        masterId: '-1'
      }
    ]
  },
  {
    name: '公司控制中心',
    deviceId: '10003',
    physicalId: 'm0001',
    physicalAddress: '00-11-22-33-44',
    description: '德润大厦302控制中心',
    avatarUrl: '',
    vendor: '松下',
    version: 1,
    state: 'Active',
    functions: [
      {
        functionId: '1',
        groupId: '1'
      },
      {
        functionId: '2',
        groupId: '1'
      }
    ],
    slaves: [
      {
        physicalId: 's001',
        physicalAddress: '',
        name: '东侧中央空调',
        description: '东侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '1',
        masterId: '-1'
      },
      {
        physicalId: 's002',
        physicalAddress: '',
        name: '西侧中央空调',
        description: '西侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '2',
        masterId: '-1'
      }
    ]
  },
  {
    name: '公司控制中心',
    deviceId: '10004',
    physicalId: 'm0001',
    physicalAddress: '00-11-22-33-44',
    description: '德润大厦302控制中心',
    avatarUrl: '',
    vendor: '松下',
    version: 1,
    state: 'Active',
    functions: [
      {
        functionId: '1',
        groupId: '1'
      },
      {
        functionId: '2',
        groupId: '1'
      }
    ],
    slaves: [
      {
        physicalId: 's001',
        physicalAddress: '',
        name: '东侧中央空调',
        description: '东侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '1',
        masterId: '-1'
      },
      {
        physicalId: 's002',
        physicalAddress: '',
        name: '西侧中央空调',
        description: '西侧中央空调',
        functions: [
          {
            functionId: '1',
            groupId: '1'
          },
          {
            functionId: '2',
            groupId: '1'
          }
        ],
        avatarUrl: '',
        tags: [
          '空调'
        ],
        deviceId: '2',
        masterId: '-1'
      }
    ]
  }
];

const funcsMock = [
  {
    functionId: '1',
    functionGroup: '1',
    functionName: 'powerOn',
    functionGroupName: 'power',
    functionDescription: '打开设备',
    inputArguments: [],
    outputArguments: []
  },
  {
    functionId: '2',
    functionGroup: '1',
    functionName: 'powerOff',
    functionGroupName: 'power',
    functionDescription: '关闭设备',
    inputArguments: [],
    outputArguments: []
  },
  {
    functionId: '3',
    functionGroup: '1',
    functionName: 'setVolume',
    functionGroupName: 'power',
    functionDescription: '设置音量',
    inputArguments: [
      {name: 'volumeSize', type: 'integer'}
    ],
    outputArguments: []
  }
];

function devices(state = {
  loading: false,
  loaded: false,
  entities: {}
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_DEVICES:
    {
      return merge({}, state, {
        loading: true,
        loaded: false
      });
    }
    case ActionTypes.RECEIVE_DEVICES:
    {
      let entities = {};
      action.devices.forEach(device => {
        entities[device.deviceId] = Object.assign({}, device);
      });
      return merge({}, state, {
        loading: false,
        loaded: true,
        entities: entities
      });
    }
    default:
      return state;
  }
}

function functions(state = {
  loading: false,
  loaded: false,
  entities: {}
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_FUNCTIONS:
    {
      return merge({}, state, {
        loading: true,
        loaded: false
      });
    }
    case ActionTypes.RECEIVE_FUNCTIONS:
    {
      let key = action.deviceId;
      if (action.slaveId && action.slaveId != -1) {
        key += `_${action.slaveId}`;
      }
      let entities = {};
      entities[key] = action.funcs;
      return merge({}, state, {
        loading: false,
        loaded: true,
        entities: entities
      });
    }
    default:
      return state;
  }
}

function invocations(state = {
  loadingKeys: [],
  entities: {}
}, action) {
  switch (action.type) {
    case ActionTypes.REQUEST_INVOCATION:
    {
      return merge({}, state, {
        loadingKeys: union([], state.loadingKeys, [action.key])
      });
    }
    case ActionTypes.RECEIVE_INVOCATION:
    {
      let nextState =  merge({}, state, {
        entities: {
          [`${action.key}`]: action.invocation 
        } 
      });
      nextState.loadingKeys = state.loadingKeys.filter(key => key != action.key);
      return nextState;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  devices,
  functions,
  invocations,
  routing
});

export default rootReducer;

