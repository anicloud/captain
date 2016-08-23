/**
 * Created by huangbin on 8/9/16.
 */
import request from 'reqwest';

export const LOAD_DEVICE = 'device/LOAD_DEVICE';
export const LOAD_DEVICE_SUCCESS = 'device/LOAD_DEVICE_SUCCESS';
export const LOAD_DEVICE_FAIL = 'device/LOAD_DEVICE_FAIL';

export const LOAD_DEVICE_DETAILS = 'device/LOAD_DEVICE_DETAILS';
export const LOAD_DEVICE_DETAILS_SUCCESS = 'device/LOAD_DEVICE_DETAILS_SUCCESS';
export const LOAD_DEVICE_DETAILS_FAIL = 'device/LOAD_DEVICE_DETAILS_FAIL';

export const LOAD_DEVICE_REPORTS = 'device/LOAD_DEVICE_REPORTS';
export const LOAD_DEVICE_REPORTS_SUCCESS = 'device/LOAD_DEVICE_REPORTS_SUCCESS';
export const LOAD_DEVICE_REPORTS_FAIL = 'device/LOAD_DEVICE_REPORTS_FAIL';

export const CREATE_DEVICE = 'device/CREATE_DEVICE';
export const CREATE_DEVICE_SUCCESS = 'device/CREATE_DEVICE_SUCCESS';
export const CREATE_DEVICE_FAIL = 'device/CREATE_DEVICE_FAIL';

export const DELETE_DEVICE = 'device/DELETE_DEVICE';
export const DELETE_DEVICE_SUCCESS = 'device/DELETE_DEVICE_SUCCESS';
export const DELETE_DEVICE_FAIL = 'device/DELETE_DEVICE_FAIL';

export const UPDATE_DEVICE = 'device/UPDATE_DEVICE';
export const UPDATE_DEVICE_SUCCESS = 'device/UPDATE_DEVICE_SUCCESS';
export const UPDATE_DEVICE_FAIL = 'device/UPDATE_DEVICE_FAIL';

export const PUBLISH_DEVICE = 'device/PUBLISH_DEVICE';
export const PUBLISH_DEVICE_SUCCESS = 'device/PUBLISH_DEVICE_SUCCESS';
export const PUBLISH_DEVICE_FAIL = 'device/PUBLISH_DEVICE_FAIL';

export function loadDevice() {
  return (dispatch, getState) => {
    const products = getState().device.products;
    if ((!products.loaded && !products.loading)) {
      dispatch(requestDevice());
      return request({
        url: '/service/device/list',
        method: 'get'
      }).then(
        (json) => requestDeviceSuccess(json),
        (err, msg) => requestDeviceFail(msg)
      );
    }
  }
}

function requestDevice() {
  return {
    type: LOAD_DEVICE
  }
}

function requestDeviceSuccess(json) {
  return {
    type: LOAD_DEVICE_SUCCESS,
    data: json
  }
}

function requestDeviceFail(msg) {
  return {
    type: LOAD_DEVICE_FAIL,
    message: msg
  }
}

export function loadDeviceDetails(deviceId) {
  return (dispatch, getState) => {
    const details = getState().device.details;
    if (!details.loading && !details.entities.hasOwnProperty(deviceId)) {
      dispatch(requestDeviceDetails());
      return request({
        url: '/service/device/details/' + deviceId,
        method: 'get'
      }).then(
        (json) => requestDeviceDetailsSuccess(json),
        (err, msg) => requestDeviceDetailsFail(msg)
      );
    }
  }
}

function requestDeviceDetails() {
  return {
    type: LOAD_DEVICE_DETAILS
  }
}

function requestDeviceDetailsSuccess(json) {
  return {
    type: LOAD_DEVICE_DETAILS_SUCCESS,
    data: json
  }
}

function requestDeviceDetailsFail(msg) {
  return {
    type: LOAD_DEVICE_DETAILS_FAIL,
    message: msg
  }
}


export function loadDeviceReports(deviceId) {
  return (dispatch, getState) => {
    const details = getState().device.details;
    if (!details.loading && !details.entities.hasOwnProperty(deviceId)) {
      dispatch(requestDeviceReports());
      return request({
        url: '/service/device/reports/' + deviceId,
        method: 'get'
      }).then(
        (json) => requestDeviceReportsSuccess(json),
        (err, msg) => requestDeviceReportsFail(msg)
      );
    }
  }
}

function requestDeviceReports() {
  return {
    type: LOAD_DEVICE_REPORTS
  }
}

function requestDeviceReportsSuccess(json) {
  return {
    type: LOAD_DEVICE_REPORTS_SUCCESS,
    data: json
  }
}

function requestDeviceReportsFail(msg) {
  return {
    type: LOAD_DEVICE_REPORTS_FAIL,
    message: msg
  }
}

export function createDevice(device) {

}

export function deleteDevice(deviceId) {

}

export function updateDevice(device) {

}

export function publishDevice(deviceId) {

}