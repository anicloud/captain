/**
 * Created by huangbin on 8/15/16.
 */
import {host, requestOptions} from '../constants';
import request from 'reqwest';

export const FETCH_API_GROUPS = 'api/FETCH_API_GROUPS';
export const FETCH_API_GROUPS_SUCCESS = 'api/FETCH_API_GROUPS_SUCCESS';
export const FETCH_API_GROUPS_FAIL = 'api/FETCH_API_GROUPS_FAIL';

export const FETCH_API_DETAILS = 'api/FETCH_API_DETAILS';
export const FETCH_API_DETAILS_SUCCESS = 'api/FETCH_API_DETAILS_SUCCESS';
export const FETCH_API_DETAILS_FAIL = 'api/FETCH_API_DETAILS_FAIL';

export const SAVE_API_GROUP = 'api/SAVE_API_GROUP';
export const SAVE_API_GROUP_SUCCESS = 'api/SAVE_API_GROUP_SUCCESS';
export const SAVE_API_GROUP_FAIL = 'api/SAVE_API_GROUP_FAIL';

export const SAVE_API = 'api/SAVE_API';
export const SAVE_API_SUCCESS = 'api/SAVE_API_SUCCESS';
export const SAVE_API_FAIL = 'api/SAVE_API_FAIL';

export function loadGroups() {
  return (dispatch, getState) => {
    const groups = getState().api.groups;
    if (!groups.loading && !groups.loaded) {
      dispatch(fetchGroups());
      return request({
        url: `${host}/service/api/group/list`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(fetchGroupsSuccess(json)),
        (err, msg) => dispatch(fetchGroupsFail(msg))
      );
    }
  }
}

function fetchGroups() {
  return {
    type: FETCH_API_GROUPS
  }
}

function fetchGroupsSuccess(json) {
  return {
    type: FETCH_API_GROUPS_SUCCESS,
    data: json
  }
}

function fetchGroupsFail(msg) {
  return {
    type: FETCH_API_GROUPS_FAIL,
    message: msg
  }
}

export function loadApiDetails(id) {
  return (dispatch, getState) => {
    const details = getState().api.details;
    if (!details.loading && !details.entities.hasOwnProperty(id)) {
      dispatch(fetchApiDetails());
      return request({
        url: `${host}/service/api/function/${id}`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(fetchApiDetailsSuccess(json)),
        (err, msg) => dispatch(fetchApiDetailsFail(msg))
      );
    }
  }
}

function fetchApiDetails() {
  return {
    type: FETCH_API_DETAILS
  }
}

function fetchApiDetailsSuccess(json) {
  return {
    type: FETCH_API_DETAILS_SUCCESS,
    data: json
  }
}

function fetchApiDetailsFail(msg) {
  return {
    type: FETCH_API_DETAILS_FAIL,
    message: msg
  }
}

export function createGroup(groupData) {
  return (dispatch, getState) => {
    dispatch(saveGroup());
    return request({
      url: `${host}/service/api/group`,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify(groupData),
      ...requestOptions
    }).then(
      (json) => dispatch(saveGroupSuccess(json)),
      (err, msg) => dispatch(saveGroupFail(msg))
    );
  }
}

function saveGroup() {
  return {
    type: SAVE_API_GROUP
  }
}

function saveGroupSuccess(json) {
  return {
    type: SAVE_API_GROUP_SUCCESS,
    data: json
  }
}

function saveGroupFail(msg) {
  return {
    type: SAVE_API_GROUP_FAIL,
    message: msg
  }
}

export function createApi(apiData) {
  return (dispatch, getState) => {
    dispatch(saveApi());
    const options = {
      url: `${host}/service/api/function`,
      method: 'post',
      contentType: 'application/json',
      data: JSON.stringify(apiData),
      ...requestOptions
    };
    return request(options).then(
      (json) => dispatch(saveApiSuccess(json)),
      (err, msg) => dispatch(saveApiFail(msg))
    );
  }
}

function saveApi() {
  return {
    type: SAVE_API
  }
}

function saveApiSuccess(json) {
  return {
    type: SAVE_API_SUCCESS,
    data: json
  }
}

function saveApiFail(msg) {
  return {
    type: SAVE_API_FAIL,
    message: msg
  }
}