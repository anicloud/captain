/**
 * Created by huangbin on 8/15/16.
 */
import * as t from './actions';
import keyBy from 'lodash.keyby';

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
        group: {
          groupId: '1',
          name: 'Power'
        },
        name: 'powerOn',
        connType: 'sync',
        accessType: 'executable',
        input: [],
        output: []
      },
      '2': {
        functionId: '2',
        group: {
          groupId: '1',
          name: 'Power'
        },
        name: 'powerOff',
        connType: 'sync',
        accessType: 'executable',
        input: [],
        output: []
      },
      '3': {
        functionId: '3',
        group: {
          groupId: '1',
          name: 'Power'
        },
        name: 'setVolume',
        connType: 'sync',
        accessType: 'executable',
        input: [
          {name: 'volumeSize', type: 'integer'}
        ],
        output: []
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
    case t.FETCH_DEBUG_DEVICES:
    {
      return Object.assign({}, state, {
        loading: true,
        loaded: false,
        entities: {}
      });
    }
    case t.FETCH_DEBUG_DEVICES_SUCCESS:
    {
      return Object.assign({}, state, {
        loading: false,
        loaded: true,
        entities: keyBy(action.data, 'deviceId')
      });
    }
    case t.FETCH_DEBUG_DEVICES_FAIL:
    {
      return Object.assign({}, state, {
        loading: false,
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
    case t.FETCH_DEBUG_FUNCTIONS:
    {
      return merge({}, state, {
        loading: true,
        message: ''
      })
    }
    case t.FETCH_DEBUG_FUNCTIONS_SUCCESS:
    {
      return merge({}, state, {
        loading: false,
        message: '',
        entities: keyBy(action.data, 'functionId')
      });
    }
    case t.FETCH_DEBUG_FUNCTIONS_FAIL:
    {
      return merge({}, state, {
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
    case t.FETCH_INVOCATION:
    {
      let nextState = merge({}, state, {
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
    case t.FETCH_INVOCATION_SUCCESS:
    {
      let nextState = merge({}, state, {
        entities: {
          [`${action.key}`]: action.data
        },
        message: ''
      });
      nextState.loadingKeys = nextState.loadingKeys.filter(key => key != action.key);
      return nextState;
    }
    case t.FETCH_INVOCATION_FAIL:
    {
      let nextState = merge({}, state, {
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

export default function (state = {
  devices: {
    loading: false,
    loaded: false,
    message: '',
    entities: {}
  },
  functions: {
    loading: false,
    message: '',
    entities: {}
  },
  invocations: {
    message: '',
    loadingKeys: [],
    entities: {}
  }
}, action = {}) {
  return Object.assign({}, state, {
    devices: devices(state.devices, action),
    functions: functions(state.functions, action),
    invocations: invocations(state.invocations, action)
  });
}