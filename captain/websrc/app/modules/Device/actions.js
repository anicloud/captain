/**
 * Created by huangbin on 8/9/16.
 */
import {host, requestOptions} from '../constants';
import request from 'reqwest';

export const FETCH_PRODUCTS = 'device/FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'device/FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'device/FETCH_PRODUCTS_FAIL';

export const FETCH_PRODUCT_REPORTS = 'device/FETCH_PRODUCT_REPORTS';
export const FETCH_PRODUCT_REPORTS_SUCCESS = 'device/FETCH_PRODUCT_REPORTS_SUCCESS';
export const FETCH_PRODUCT_REPORTS_FAIL = 'device/FETCH_PRODUCT_REPORTS_FAIL';

export const DELETE_PRODUCT = 'device/DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'device/DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'device/DELETE_PRODUCT_FAIL';

export const SAVE_PRODUCT = 'device/SAVE_PRODUCT';
export const SAVE_PRODUCT_SUCCESS = 'device/SAVE_PRODUCT_SUCCESS';
export const SAVE_PRODUCT_FAIL = 'device/SAVE_PRODUCT_FAIL';

export function loadProducts() {
  return (dispatch, getState) => {
    const products = getState().device.products;
    if (!products.loading) {
      dispatch(fetchProducts());
      return request({
        url: `${host}/service/product/device/list`,
        method: 'get',
        ...requestOptions
      }).then(
        (json) => dispatch(fetchProductsSuccess(json)),
        (err, msg) => dispatch(fetchProductsFail(msg))
      );
    }
  }
}

function fetchProducts() {
  return {
    type: FETCH_PRODUCTS
  }
}

function fetchProductsSuccess(json) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    data: json
  }
}

function fetchProductsFail(msg) {
  return {
    type: FETCH_PRODUCTS_FAIL,
    message: msg
  }
}

export function updateProduct(productData) {
  return (dispatch, getState) => {
    const products = getState().device.products;
    if (!products.loading) {
      dispatch(saveProduct());
      const options = {
        url: `${host}/service/product/device`,
        method: 'post',
        contentType: 'application/json',
        data: JSON.stringify(productData),
        ...requestOptions
      };
      return request(options).then(
        (json) => dispatch(saveProductSuccess(json)),
        (err, msg) => dispatch(saveProductFail(msg))
      );
    }
  }
}

function saveProduct() {
  return {
    type: SAVE_PRODUCT
  }
}

function saveProductSuccess(json) {
  return {
    type: SAVE_PRODUCT_SUCCESS,
    data: json
  }
}

function saveProductFail(msg) {
  return {
    type: SAVE_PRODUCT_FAIL,
    message: msg
  }
}


export function destroyProduct(productId) {
  return (dispatch, getState) => {
    const products = getState().device.products;
    if (!products.loading) {
      dispatch(deleteProduct());
      const options = {
        url: `${host}/service/product/device`,
        method: 'delete',
        contentType: 'application/json',
        data: JSON.stringify(productId),
        ...requestOptions
      };
      return request(options).then(
        () => dispatch(deleteProductSuccess(productId)),
        (err, msg) => dispatch(deleteProductFail(msg))
      );
    }
  }
}

function deleteProduct() {
  return {
    type: DELETE_PRODUCT
  }
}

function deleteProductSuccess(productId) {
  return {
    type: DELETE_PRODUCT_SUCCESS,
    data: productId
  }
}

function deleteProductFail(msg) {
  return {
    type: DELETE_PRODUCT_FAIL,
    message: msg
  }
}

export function loadProductReports(productId, period) {
  return (dispatch, getState) => {
    dispatch(fetchProductReports());
    return request({
      url: `${host}/service/product/device/reports/${productId}`,
      method: 'get',
      data: {period: period},
      ...requestOptions
    }).then(
      (json) => dispatch(fetchProductReportsSuccess(json)),
      (err, msg) => dispatch(fetchProductReportsFail(msg))
    );
  }
}

function fetchProductReports() {
  return {
    type: FETCH_PRODUCT_REPORTS
  }
}

function fetchProductReportsSuccess(json) {
  return {
    type: FETCH_PRODUCT_REPORTS_SUCCESS,
    data: json
  }
}

function fetchProductReportsFail(msg) {
  return {
    type: FETCH_PRODUCT_REPORTS_FAIL,
    message: msg
  }
}
