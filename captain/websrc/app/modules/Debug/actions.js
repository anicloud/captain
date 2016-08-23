/**
 * Created by huangbin on 8/15/16.
 */
import request from 'reqwest';

export const REQUEST_DEBUG_DEVICES = 'debug/REQUEST_DEBUG_DEVICES';
export const REQUEST_DEBUG_DEVICES_SUCCESS = 'debug/REQUEST_DEBUG_DEVICES_SUCCESS';
export const REQUEST_DEBUG_DEVICES_FAIL = 'debug/REQUEST_DEBUG_DEVICES_FAIL';

export const REQUEST_DEBUG_FUNCTIONS = 'debug/REQUEST_DEBUG_API';
export const REQUEST_DEBUG_FUNCTIONS_SUCCESS = 'debug/REQUEST_DEBUG_FUNCTIONS_SUCCESS';
export const REQUEST_DEBUG_FUNCTIONS_FAIL = 'debug/REQUEST_DEBUG_FUNCTIONS_FAIL';

export const REQUEST_INVOCATION = 'debug/REQUEST_INVOCATION';
export const REQUEST_INVOCATION_SUCCESS = 'debug/REQUEST_INVOCATION_SUCCESS';
export const REQUEST_INVOCATION_FAIL = 'debug/REQUEST_INVOCATION_FAIL';

const host = '';

export function loadDebugDevices() {
  return (dispatch, getState) => {
    const devices = getState().debug.devices;
    if (!devices.loading) {
      dispatch(requestDebugDevices());
      return request({
        url: '/service/debug/devices',
        method: 'get'
      }).then(
        (json) => dispatch(requestDebugDevicesSuccess(json)),
        (err, msg) => dispatch(requestDebugDevicesFail(msg))
      );
    }
  }
}

function requestDebugDevices() {
  return {
    type: REQUEST_DEBUG_DEVICES
  }
}

function requestDebugDevicesSuccess(json) {
  return {
    type: REQUEST_DEBUG_DEVICES_SUCCESS,
    data: json
  }
}

function requestDebugDevicesFail(msg) {
  return {
    type: REQUEST_DEBUG_DEVICES_FAIL,
    message: msg
  }
}

export function loadDebugFunctions(deviceId) {
  return (dispatch, getState) => {
    const functions = getState().debug.functions;
    if (!functions.loading && !functions.entities[deviceId]) {
      dispatch(requestDebugFunctions());
      return request({
        url: '/service/debug/functions/deviceId=' + deviceId,
        method: 'get'
      }).then(
        (json) => dispatch(requestDebugFunctionsSuccess(json)),
        (err, msg) => dispatch(requestDebugFunctionsFail(msg))
      );
    }
  }
}

function requestDebugFunctions() {
  return {
    type: REQUEST_DEBUG_FUNCTIONS
  }
}

function requestDebugFunctionsSuccess(json) {
  return {
    type: REQUEST_DEBUG_FUNCTIONS_SUCCESS,
    data: json
  }
}

function requestDebugFunctionsFail(msg) {
  return {
    type: REQUEST_DEBUG_FUNCTIONS_FAIL,
    message: msg
  }
}

export function invokeFunction(key, invocation) {
  return (dispatch, getState) => {
    const invocations = getState().debug.invocations;
    if (!invocations.loadingKeys.includes(key)) {
      dispatch(requestInvocation(key, invocation));
      return request({
        url: `${host}/service/function/invoke`,
        method: 'POST',
        contentType: 'application/json',
        type: 'json',
        data: JSON.stringify(invocation)
      })
      .then(
        (json) => dispatch(requestInvocationSuccess(key, json)),
        (err, msg) => dispatch(requestInvocationFail(key, msg))
      );
    }
  }
}

function requestInvocation(key, data) {
  return {
    type: REQUEST_INVOCATION,
    key: key,
    data: data
  }
}

function requestInvocationSuccess(key, data) {
  return {
    type: REQUEST_INVOCATION_SUCCESS,
    key: key,
    data: data
  }
}

function requestInvocationFail(key, msg) {
  return {
    type: REQUEST_INVOCATION_FAIL,
    key: key,
    message: msg
  }
}
