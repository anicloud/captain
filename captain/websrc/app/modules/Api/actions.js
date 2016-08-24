/**
 * Created by huangbin on 8/15/16.
 */
import {host} from '../constants';
import request from 'reqwest';

export const REQUEST_API_GROUPS = 'api/REQUEST_API_GROUPS';
export const REQUEST_API_GROUPS_SUCCESS = 'api/REQUEST_API_GROUPS_SUCCESS';
export const REQUEST_API_GROUPS_FAIL = 'api/REQUEST_API_GROUPS_FAIL';

export const REQUEST_API_DETAILS = 'api/REQUEST_API_DETAILS';
export const REQUEST_API_DETAILS_SUCCESS = 'api/REQUEST_API_DETAILS_SUCCESS';
export const REQUEST_API_DETAILS_FAIL = 'api/REQUEST_API_DETAILS_FAIL';

export function loadGroups() {
  return (dispatch, getState) => {
    const groups = getState().api.groups;
    if (!groups.loading && !groups.loaded) {
      dispatch(requestGroups());
      return request({
        url: `${host}/service/api/groups`,
        type: 'json',
        method: 'get'
      }).then(
        (json) => requestGroupsSuccess(json),
        (err, msg) => requestGroupsFail(msg)
      );
    }
  }
}

function requestGroups() {
  console.log('request');
  return {
    type: REQUEST_API_GROUPS
  }
}

function requestGroupsSuccess(json) {
  return {
    type: REQUEST_API_GROUPS_SUCCESS,
    data: json
  }
}

function requestGroupsFail(msg) {
  return {
    type: REQUEST_API_GROUPS_FAIL,
    message: msg
  }
}

export function loadApiDetails(id) {
  return (dispatch, getState) => {
    const details = getState().api.details;
    if (!details.loading && !details.entities.hasOwnProperty(id)) {
      dispatch(requestApiDetails());
      return request({
        url: `${host}/service/api/details/${id}`,
        type: 'json',
        method: 'get'
      }).then(
        (json) => requestApiDetailsSuccess(json),
        (msg) => requestApiDetailsFail(msg)
      );
    }
  }
}

function requestApiDetails() {
  return {
    type: REQUEST_API_DETAILS
  }
}

function requestApiDetailsSuccess(json) {
  return {
    type: REQUEST_API_DETAILS_SUCCESS,
    data: json
  }
}

function requestApiDetailsFail(msg) {
  return {
    type: REQUEST_API_DETAILS_FAIL,
    messgae: msg
  }
}