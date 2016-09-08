/**
 * Created by huangbin on 8/15/16.
 */
import {host, requestOptions} from '../constants';
import request from 'reqwest';

export const FETCH_DEBUG_DEVICES = 'debug/FETCH_DEBUG_DEVICES';
export const FETCH_DEBUG_DEVICES_SUCCESS = 'debug/FETCH_DEBUG_DEVICES_SUCCESS';
export const FETCH_DEBUG_DEVICES_FAIL = 'debug/FETCH_DEBUG_DEVICES_FAIL';

export const FETCH_DEBUG_FUNCTIONS = 'debug/FETCH_DEBUG_API';
export const FETCH_DEBUG_FUNCTIONS_SUCCESS = 'debug/FETCH_DEBUG_FUNCTIONS_SUCCESS';
export const FETCH_DEBUG_FUNCTIONS_FAIL = 'debug/FETCH_DEBUG_FUNCTIONS_FAIL';

export const FETCH_INVOCATION = 'debug/FETCH_INVOCATION';
export const FETCH_INVOCATION_SUCCESS = 'debug/FETCH_INVOCATION_SUCCESS';
export const FETCH_INVOCATION_FAIL = 'debug/FETCH_INVOCATION_FAIL';

export function loadDebugDevices() {
  return (dispatch, getState) => {
    const devices = getState().debug.devices;
    if (!devices.loading) {
      dispatch(fetchDebugDevices());
      return request({
        url: `${host}/service/debug/device/list`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(fetchDebugDevicesSuccess(json)),
        (err, msg) => dispatch(fetchDebugDevicesFail(msg))
      );
    }
  }
}

function fetchDebugDevices() {
  return {
    type: FETCH_DEBUG_DEVICES
  }
}

function fetchDebugDevicesSuccess(json) {
  return {
    type: FETCH_DEBUG_DEVICES_SUCCESS,
    data: json
  }
}

function fetchDebugDevicesFail(msg) {
  return {
    type: FETCH_DEBUG_DEVICES_FAIL,
    message: msg
  }
}

export function loadDebugFunctions(deviceId) {
  return (dispatch, getState) => {
    const functions = getState().debug.functions;
    if (!functions.loading && !functions.entities[deviceId]) {
      dispatch(fetchDebugFunctions());
      const [masterId, slaveId] = deviceId.split('_', 2);
      return request({
        url: `${host}/service/debug/functions/${masterId}/${slaveId}`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(fetchDebugFunctionsSuccess(json)),
        (err, msg) => dispatch(fetchDebugFunctionsFail(msg))
      );
    }
  }
}

function fetchDebugFunctions() {
  return {
    type: FETCH_DEBUG_FUNCTIONS
  }
}

function fetchDebugFunctionsSuccess(json) {
  return {
    type: FETCH_DEBUG_FUNCTIONS_SUCCESS,
    data: json
  }
}

function fetchDebugFunctionsFail(msg) {
  return {
    type: FETCH_DEBUG_FUNCTIONS_FAIL,
    message: msg
  }
}

export function invokeFunction(key, invocation) {
  return (dispatch, getState) => {
    const invocations = getState().debug.invocations;
    if (!invocations.loadingKeys.includes(key)) {
      dispatch(fetchInvocation(key, invocation));
      return request({
        url: `${host}/service/debug/function/invoke`,
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(invocation),
        ...requestOptions
      })
      .then(
        (json) => dispatch(fetchInvocationSuccess(key, json)),
        (err, msg) => dispatch(fetchInvocationFail(key, msg))
      );
    }
  }
}

function fetchInvocation(key, data) {
  return {
    type: FETCH_INVOCATION,
    key: key,
    data: data
  }
}

function fetchInvocationSuccess(key, data) {
  return {
    type: FETCH_INVOCATION_SUCCESS,
    key: key,
    data: data
  }
}

function fetchInvocationFail(key, msg) {
  return {
    type: FETCH_INVOCATION_FAIL,
    key: key,
    message: msg
  }
}
