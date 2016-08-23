/**
 * Created by huangbin on 8/9/16.
 */
import request from 'reqwest';

export const LOAD_APP = 'application/LOAD_APP';
export const LOAD_APP_SUCCESS = 'application/LOAD_APP_SUCCESS';
export const LOAD_APP_FAIL = 'application/LOAD_APP_FAIL';

export const LOAD_APP_DETAILS = 'application/LOAD_APP_DETAILS';
export const LOAD_APP_DETAILS_SUCCESS = 'application/LOAD_APP_DETAILS_SUCCESS';
export const LOAD_APP_DETAILS_FAIL = 'application/LOAD_APP_DETAILS_FAIL';

export const LOAD_APP_REPORTS = 'application/LOAD_APP_REPORTS';
export const LOAD_APP_REPORTS_SUCCESS = 'application/LOAD_APP_REPORTS_SUCCESS';
export const LOAD_APP_REPORTS_FAIL = 'application/LOAD_APP_REPORTS_FAIL';

export const CREATE_APP = 'application/CREATE_APP';
export const CREATE_APP_SUCCESS = 'application/CREATE_APP_SUCCESS';
export const CREATE_APP_FAIL = 'application/CREATE_APP_FAIL';

export const DELETE_APP = 'application/DELETE_APP';
export const DELETE_APP_SUCCESS = 'application/DELETE_APP_SUCCESS';
export const DELETE_APP_FAIL = 'application/DELETE_APP_FAIL';

export const UPDATE_APP = 'application/UPDATE_APP';
export const UPDATE_APP_SUCCESS = 'application/UPDATE_APP_SUCCESS';
export const UPDATE_APP_FAIL = 'application/UPDATE_APP_FAIL';

export const PUBLISH_APP = 'application/PUBLISH_APP';
export const PUBLISH_APP_SUCCESS = 'application/PUBLISH_APP_SUCCESS';
export const PUBLISH_APP_FAIL = 'application/PUBLISH_APP_FAIL';

export function loadApp() {
  return (dispatch, getState) => {
    const products = getState().app.products;
    if ((!products.loaded && !products.loading)) {
      dispatch(requestApp());
      return request({
        url: '/service/app/list',
        method: 'get'
      }).then(
        (json) => requestAppSuccess(json),
        (err, msg) => requestAppFail(msg)
      );
    }
  }
}

function requestApp() {
  return {
    type: LOAD_APP
  }
}

function requestAppSuccess(json) {
  return {
    type: LOAD_APP_SUCCESS,
    data: json
  }
}

function requestAppFail(msg) {
  return {
    type: LOAD_APP_FAIL,
    message: msg
  }
}

export function loadAppDetails(appId) {
  return (dispatch, getState) => {
    const details = getState().app.details;
    if (!details.loading && !details.entities.hasOwnProperty(appId)) {
      dispatch(requestAppDetails());
      return request({
        url: '/service/app/details/' + appId,
        method: 'get'
      }).then(
        (json) => requestAppDetailsSuccess(json),
        (err, msg) => requestAppDetailsFail(msg)
      );
    }
  }
}

function requestAppDetails() {
  return {
    type: LOAD_APP_DETAILS
  }
}

function requestAppDetailsSuccess(json) {
  return {
    type: LOAD_APP_DETAILS_SUCCESS,
    data: json
  }
}

function requestAppDetailsFail(msg) {
  return {
    type: LOAD_APP_DETAILS_FAIL,
    message: msg
  }
}


export function loadAppReports(appId) {
  return (dispatch, getState) => {
    const details = getState().app.details;
    if (!details.loading && !details.entities.hasOwnProperty(appId)) {
      dispatch(requestAppReports());
      return request({
        url: '/service/app/reports/' + appId,
        method: 'get'
      }).then(
        (json) => requestAppReportsSuccess(json),
        (err, msg) => requestAppReportsFail(msg)
      );
    }
  }
}

function requestAppReports() {
  return {
    type: LOAD_APP_REPORTS
  }
}

function requestAppReportsSuccess(json) {
  return {
    type: LOAD_APP_REPORTS_SUCCESS,
    data: json
  }
}

function requestAppReportsFail(msg) {
  return {
    type: LOAD_APP_REPORTS_FAIL,
    message: msg
  }
}

export function createApp(app) {

}

export function deleteApp(appId) {

}

export function updateApp(app) {

}

export function publishApp(appId) {

}