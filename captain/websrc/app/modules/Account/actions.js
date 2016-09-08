/**
 * Created by huangbin on 8/9/16.
 */
import {host, requestOptions} from '../constants';
import request from 'reqwest';

export const REQUEST_ACCOUNT_INFO = 'account/REQUEST_ACCOUNT_INFO';
export const REQUEST_ACCOUNT_INFO_SUCCESS = 'account/REQUEST_ACCOUNT_INFO_SUCCESS';
export const REQUEST_ACCOUNT_INFO_FAIL = 'account/REQUEST_ACCOUNT_INFO_FAIL';

export const REQUEST_ACCOUNT_APP = 'account/REQUEST_ACCOUNT_APP';
export const REQUEST_ACCOUNT_APP_SUCCESS = 'account/REQUEST_ACCOUNT_APP_SUCCESS';
export const REQUEST_ACCOUNT_APP_FAIL = 'account/REQUEST_ACCOUNT_APP_FAIL';

export const REQUEST_ACCOUNT_DEVICE = 'account/REQUEST_ACCOUNT_DEVICE';
export const REQUEST_ACCOUNT_DEVICE_SUCCESS = 'account/REQUEST_ACCOUNT_DEVICE_SUCCESS';
export const REQUEST_ACCOUNT_DEVICE_FAIL = 'account/REQUEST_ACCOUNT_DEVICE_FAIL';

export const SAVE_ACCOUNT_APP = 'account/SAVE_ACCOUNT_APP';
export const SAVE_ACCOUNT_APP_SUCCESS = 'account/SAVE_ACCOUNT_APP_SUCCESS';
export const SAVE_ACCOUNT_APP_FAIL = 'account/SAVE_ACCOUNT_APP_FAIL';

export const SAVE_ACCOUNT_DEVICE = 'account/SAVE_ACCOUNT_DEVICE';
export const SAVE_ACCOUNT_DEVICE_SUCCESS = 'account/SAVE_ACCOUNT_DEVICE_SUCCESS';
export const SAVE_ACCOUNT_DEVICE_FAIL = 'account/SAVE_ACCOUNT_DEVICE_FAIL';

export const DELETE_ACCOUNT_APP = 'account/DELETE_ACCOUNT_APP';
export const DELETE_ACCOUNT_APP_SUCCESS = 'account/DELETE_ACCOUNT_APP_SUCCESS';
export const DELETE_ACCOUNT_APP_FAIL = 'account/DELETE_ACCOUNT_APP_FAIL';

export const DELETE_ACCOUNT_DEVICE = 'account/DELETE_ACCOUNT_DEVICE';
export const DELETE_ACCOUNT_DEVICE_SUCCESS = 'account/DELETE_ACCOUNT_DEVICE_SUCCESS';
export const DELETE_ACCOUNT_DEVICE_FAIL = 'account/DELETE_ACCOUNT_DEVICE_FAIL';

export const LOGOUT = 'account/LOGOUT';

export function loadAccountInfo() {
  return (dispatch, getState) => {
    const info = getState().account.info;
    if (!info.loading && !info.loaded) {
      dispatch(requestAccountInfo());
      return request({
        url: `${host}/service/account/info`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(requestAccountInfoSuccess(json)),
        (err, msg) => dispatch(requestAccountInfoFail(msg))
      );
    }
  }
}

function requestAccountInfo() {
  return {
    type: REQUEST_ACCOUNT_INFO
  }
}

function requestAccountInfoSuccess(json) {
  return {
    type: REQUEST_ACCOUNT_INFO_SUCCESS,
    data: json
  }
}

function requestAccountInfoFail(msg) {
  return {
    type: REQUEST_ACCOUNT_INFO_FAIL,
    message: ''
  }
}

export function loadAccountApp() {
  return (dispatch, getState) => {
    const appAccount = getState().account.app;
    if (!appAccount.loading) {
      dispatch(requestAccountApp());
      return request({
        url: `${host}/service/account/app`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(requestAccountAppSuccess(json)),
        (err, msg) => dispatch(requestAccountAppFail(msg))
      );
    }
  }
}

function requestAccountApp() {
  return {
    type: REQUEST_ACCOUNT_APP
  }
}

function requestAccountAppSuccess(json) {
  return {
    type: REQUEST_ACCOUNT_APP_SUCCESS,
    data: json
  }
}

function requestAccountAppFail(msg) {
  return {
    type: REQUEST_ACCOUNT_APP_FAIL,
    message: msg
  }
}

export function updateAccountApp(accountData) {
  return (dispatch, getState) => {
    const accountApp = getState().account.app;
    if (!accountApp.loading) {
      dispatch(saveAccountApp());
      const options = {
        url: `${host}/service/account/app`,
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(accountData),
        ...requestOptions
      };
      return request(options).then(
        (json) => dispatch(saveAccountAppSuccess(json)),
        (err, msg) => dispatch(saveAccountAppFail(msg))
      );
    }
  }
}

function saveAccountApp() {
  return {
    type: SAVE_ACCOUNT_APP
  }
}

function saveAccountAppSuccess(json) {
  return {
    type: SAVE_ACCOUNT_APP_SUCCESS,
    data: json
  }
}

function saveAccountAppFail(msg) {
  return {
    type: SAVE_ACCOUNT_APP_FAIL,
    message: msg
  }
}

export function destroyAccountApp() {
  return (dispatch, getState) => {
    const accountApp = getState().account.app;
    if (!accountApp.loading) {
      dispatch(saveAccountApp());
      const options = {
        url: `${host}/service/account/app`,
        method: 'delete',
        contentType: 'application/json',
        ...requestOptions
      };
      return request(options).then(
        () => dispatch(deleteAccountAppSuccess(accountApp)),
        (err, msg) => dispatch(saveAccountAppFail(msg))
      );
    }
  }
}

function deleteAccountApp() {
  return {
    type: DELETE_ACCOUNT_APP
  }
}

function deleteAccountAppSuccess(account) {
  return {
    type: DELETE_ACCOUNT_APP_SUCCESS,
    data: account
  }
}

function deleteAccountAppFail(msg) {
  return {
    type: DELETE_ACCOUNT_APP_FAIL,
    message: msg
  }
}

export function loadAccountDevice() {
  return (dispatch, getState) => {
    const deviceAccount = getState().account.device;
    if (!deviceAccount.loading) {
      dispatch(requestAccountDevice());
      return request({
        url: `${host}/service/account/device`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(requestAccountDeviceSuccess(json)),
        (err, msg) => dispatch(requestAccountDeviceFail(msg))
      );
    }
  }
}

function requestAccountDevice() {
  return {
    type: REQUEST_ACCOUNT_DEVICE
  }
}

function requestAccountDeviceSuccess(json) {
  return {
    type: REQUEST_ACCOUNT_DEVICE_SUCCESS,
    data: json
  }
}

function requestAccountDeviceFail(msg) {
  return {
    type: REQUEST_ACCOUNT_DEVICE_FAIL,
    message: msg
  }
}

export function updateAccountDevice(accountData) {
  return (dispatch, getState) => {
    const accountDevice = getState().account.device;
    if (!accountDevice.loading) {
      dispatch(saveAccountDevice());
      const options = {
        url: `${host}/service/account/device`,
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(accountData),
        ...requestOptions
      };
      return request(options).then(
        (json) => dispatch(saveAccountDeviceSuccess(json)),
        (err, msg) => dispatch(saveAccountDeviceFail(msg))
      );
    }
  }
}

function saveAccountDevice() {
  return {
    type: SAVE_ACCOUNT_DEVICE
  }
}

function saveAccountDeviceSuccess(json) {
  return {
    type: SAVE_ACCOUNT_DEVICE_SUCCESS,
    data: json
  }
}

function saveAccountDeviceFail(msg) {
  return {
    type: SAVE_ACCOUNT_DEVICE_FAIL,
    message: msg
  }
}


export function destroyAccountDevice() {
  return (dispatch, getState) => {
    const accountDevice = getState().account.device;
    if (!accountDevice.loading) {
      dispatch(deleteAccountApp());
      const options = {
        url: `${host}/service/account/device`,
        method: 'delete',
        contentType: 'application/json',
        ...requestOptions
      };
      return request(options).then(
        () => dispatch(deleteAccountDeviceSuccess(accountDevice)),
        (err, msg) => dispatch(saveAccountDeviceFail(msg))
      );
    }
  }
}

function deleteAccountDevice() {
  return {
    type: DELETE_ACCOUNT_DEVICE
  }
}

function deleteAccountDeviceSuccess(account) {
  return {
    type: DELETE_ACCOUNT_DEVICE_SUCCESS,
    data: account
  }
}

function deleteAccountDeviceFail(msg) {
  return {
    type: DELETE_ACCOUNT_DEVICE_FAIL,
    message: msg
  }
}