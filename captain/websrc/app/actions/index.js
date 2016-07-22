/**
 * Created by huangbin on 6/27/16.
 */

// import fetch from 'isomorphic-fetch'
import reqwest from 'reqwest'

// const host = 'http://localhost:9000';
const host = '';

export const REQUEST_DEVICES = 'REQUEST_DEVICES';
export const RECEIVE_DEVICES = 'RECEIVE_DEVICES';

function requestDevices() {
  return {
    type: REQUEST_DEVICES
  }
}

function receiveDevices(json) {
  return {
    type: RECEIVE_DEVICES,
    devices: json
  }
}

function fetchDevices() {
  return dispatch => {
    dispatch(requestDevices());
    return reqwest({
      url: `${host}/service/device/all`,
      method: 'get'
    })
      .then(json => dispatch(receiveDevices(json)))
  }
}

function shouldFetchDevices(state) {
  const entities = state.devices.entities;
  if (!entities || entities.length === 0) {
    return true;
  } else {
    return !state.loading;
  }
}

export function loadDevices() {
  return (dispatch, getState) => {
    if (shouldFetchDevices(getState())) {
      return dispatch(fetchDevices());
    }
  }
}

export const REQUEST_FUNCTIONS = 'REQUEST_FUNCTIONS';
export const RECEIVE_FUNCTIONS = 'RECEIVE_FUNCTIONS';

function requestFuncs(deviceId, slaveId) {
  return {
    type: REQUEST_FUNCTIONS,
    deviceId: deviceId,
    slaveId: slaveId
  }
}

function receiveFuncs(deviceId, slaveId, json) {
  return {
    type: RECEIVE_FUNCTIONS,
    deviceId: deviceId,
    slaveId: slaveId,
    funcs: json
  }
}

function fetchFuncs(deviceId, slaveId) {
  return dispatch => {
    if (!slaveId || slaveId == -1) {
      slaveId = -1;
    }
    const params = `deviceId=${deviceId}&slaveId=${slaveId}`;
    dispatch(requestFuncs(deviceId, slaveId));
    return reqwest({
      url: `${host}/service/function/getByDevice/?${params}`,
      method: 'get'
    })
      .then(json => dispatch(receiveFuncs(deviceId, slaveId, json)));
  }
}

function shouldFetchFuncs(state, deviceId, slaveId) {
  if (!deviceId || state.functions.loading) {
    return false;
  }
  if (!slaveId || slaveId == -1) {
    slaveId = -1;
  }
  const key = `${deviceId}_${slaveId}`;
  const entities = state.functions.entities;
  return !entities || !entities.hasOwnProperty(key);
}

export function loadFuncs(deviceId, slaveId) {
  return (dispatch, getState) => {
    if (shouldFetchFuncs(getState(), deviceId, slaveId)) {
      return dispatch(fetchFuncs(deviceId, slaveId));
    }
  }
}

export const REQUEST_INVOCATION = 'REQUEST_INVOCATION';
export const RECEIVE_INVOCATION = 'RESPONSE_INVOCATION';

function requestInvocation(key, invocation) {
  return {
    type: REQUEST_INVOCATION,
    key: key,
    invocation: invocation
  }
}

function receiveInvocation(key, json) {
  return {
    type: RECEIVE_INVOCATION,
    key: key,
    invocation: json
  }
}

function shouldInvokeFunction(state, invocationKey, invocation) {
  if (!invocation || state.invocations.loadingKeys.some(key => key == invocationKey)) {
    return false;
  }
  return true;
}

export function invokeFunction(key, invocation) {
  return (dispatch, getState) => {
    if (shouldInvokeFunction(getState(), key, invocation)) {
      dispatch(requestInvocation(key, invocation));
      return reqwest({
        url: `${host}/service/function/invoke`,
        method: 'POST',
        contentType: 'application/json',
        type: 'json',
        data: JSON.stringify(invocation)
      })
        .then(json => dispatch(receiveInvocation(key, json)));
    }
  }
}
