/**
 * Created by huangbin on 8/9/16.
 */
import {host} from '../constants';
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

export const CREATE_ACCOUNT_APP = 'account/CREATE_ACCOUNT_APP';
export const CREATE_ACCOUNT_APP_SUCCESS = 'account/CREATE_ACCOUNT_APP_SUCCESS';
export const CREATE_ACCOUNT_APP_FAIL = 'account/CREATE_ACCOUNT_APP_FAIL';

export const CREATE_ACCOUNT_DEVICE = 'account/CREATE_ACCOUNT_DEVICE';
export const CREATE_ACCOUNT_DEVICE_SUCCESS = 'account/CREATE_ACCOUNT_DEVICE_SUCCESS';
export const CREATE_ACCOUNT_DEVICE_FAIL = 'account/CREATE_ACCOUNT_DEVICE_FAIL';

export const UPDATE_ACCOUNT_APP = 'account/UPDATE_ACCOUNT_APP';
export const UPDATE_ACCOUNT_APP_SUCCESS = 'account/UPDATE_ACCOUNT_APP_SUCCESS';
export const UPDATE_ACCOUNT_APP_FAIL = 'account/UPDATE_ACCOUNT_APP_FAIL';

export const UPDATE_ACCOUNT_DEVICE = 'account/UPDATE_ACCOUNT_DEVICE';
export const UPDATE_ACCOUNT_DEVICE_SUCCESS = 'account/UPDATE_ACCOUNT_DEVICE_SUCCESS';
export const UPDATE_ACCOUNT_DEVICE_FAIL = 'account/UPDATE_ACCOUNT_DEVICE_FAIL';

export const DELETE_ACCOUNT_APP = 'account/DELETE_ACCOUNT_APP';
export const DELETE_ACCOUNT_APP_SUCCESS = 'account/DELETE_ACCOUNT_APP_SUCCESS';
export const DELETE_ACCOUNT_APP_FAIL = 'account/DELETE_ACCOUNT_APP_FAIL';

export const DELETE_ACCOUNT_DEVICE = 'account/DELETE_ACCOUNT_DEVICE';
export const DELETE_ACCOUNT_DEVICE_SUCCESS = 'account/DELETE_ACCOUNT_DEVICE_SUCCESS';
export const DELETE_ACCOUNT_DEVICE_FAIL = 'account/DELETE_ACCOUNT_DEVICE_FAIL';

export function loadAccountInfo() {
  return (dispatch, getState) => {
    const info = getState().account.info;
    if (!info.loading && !info.loaded) {
      dispatch(requestAccountInfo());
      return request({
        url: '/service/account/info',
        method: 'get'
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
    if (!appAccount.loading && !appAccount.loaded) {
      dispatch(requestAccountApp());
      return request({
        url: '/service/account/app',
        method: 'get'
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

export function loadAccountDevice() {
  return (dispatch, getState) => {
    const deviceAccount = getState().account.device;
    if (!deviceAccount.loading && !deviceAccount.loaded) {
      dispatch(requestAccountDevice());
      return request({
        url: '/service/account/device',
        method: 'get'
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

export function createAccountApp(account) {
  
}

export function deleteAccountApp(accountId) {

}

export function updateAccountApp(account) {

}

export function createAccountDevice(account) {

}

export function deleteAccountDevice(accountId) {

}

export function updateAccountDevice(account) {

}

