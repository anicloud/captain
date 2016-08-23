/**
 * Created by huangbin on 8/15/16.
 */
import * as _ from 'lodash';
import * as t from './actions';

const initialState = {
  devices: {
    loading: false,
    loaded: true,
    message: '',
    entities: {
      '1': {
        name: '公司控制中心',
        deviceId: '1',
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
            masterId: '1'
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
            masterId: '1'
          }
        ]
      },
      '2': {
        name: '公司控制中心',
        deviceId: '2',
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
            masterId: '2'
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
            masterId: '2'
          }
        ]
      },
      '3': {
        name: '公司控制中心',
        deviceId: '3',
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
            masterId: '3'
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
            masterId: '3'
          }
        ]
      },
      '4': {
        name: '公司控制中心',
        deviceId: '4',
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
            masterId: '4'
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
            masterId: '4'
          }
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
        groupName: 'Power',
        name: 'powerOn',
        description: '打开设备',
        inputArguments: [],
        outputArguments: []
      },
      '2': {
        functionId: '2',
        groupId: '1',
        groupName: 'Power',
        name: 'powerOff',
        description: '关闭设备',
        inputArguments: [],
        outputArguments: []
      },
      '3': {
        functionId: '3',
        groupId: '1',
        groupName: 'Power',
        name: 'setVolume',
        description: '设置音量',
        inputArguments: [
          {name: 'volumeSize', type: 'integer'}
        ],
        outputArguments: []
      }
    }
  },
  invocations: {
    message: '',
    loadingKeys: [],
    entities: {}
  }
};

function devices(state, action) {
  switch (action.type) {
    case t.REQUEST_DEBUG_DEVICES:
    {
      return _.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {}
      });
    }
    case t.REQUEST_DEBUG_DEVICES_SUCCESS:
    {
      return _.assign({}, state, {
        loading: true,
        loaded: false,
        entities: _.keyBy(action.data, 'deviceId')
      });
    }
    case t.REQUEST_DEBUG_DEVICES_FAIL:
    {
      return _.assign({}, state, {
        loading: true,
        loaded: false,
        message: action.message,
        entities: {}
      });
    }
    default:
      return state;
  }
}

function functions(state, action) {
  switch (action.type) {
    case t.REQUEST_DEBUG_FUNCTIONS:
    {
      return _.merge({}, state, {
        loading: true,
        message: ''
      })
    }
    case t.REQUEST_DEBUG_FUNCTIONS_SUCCESS:
    {
      return _.merge({}, state, {
        loading: false,
        message: '',
        entities: _.keyBy(action.data, 'functionId')
      });
    }
    case t.REQUEST_DEBUG_FUNCTIONS_FAIL:
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

function invocations(state, action) {
  switch (action.type) {
    case t.REQUEST_INVOCATION:
    {
      let nextState = _.merge({}, state, {
        entities: {
          [`${action.key}`]: action.data
        },
        message: ''
      });
      if (!nextState.loadingKeys.includes(action.key)) {
        nextState.loadingKeys.push(action.key);
      }
      return nextState;
    }
    case t.REQUEST_INVOCATION_SUCCESS:
    {
      let nextState = _.merge({}, state, {
        entities: {
          [`${action.key}`]: action.data
        },
        message: ''
      });
      nextState.loadingKeys = nextState.loadingKeys.filter(key => key != action.key);
      return nextState;
    }
    case t.REQUEST_INVOCATION_FAIL:
    {
      let nextState = _.merge({}, state, {
        message: ''
      });
      nextState.loadingKeys = nextState.loadingKeys.filter(key => key != action.key);
      console.log(nextState);
      return nextState;
    }
    default:
      return state;
  }
}

export default function (state = initialState, action = {}) {
  return Object.assign({}, state, {
    devices: devices(state.devices, action),
    functions: functions(state.functions, action),
    invocations: invocations(state.invocations, action)
  });
}