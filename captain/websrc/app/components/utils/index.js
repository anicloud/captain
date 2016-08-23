/**
 * Created by huangbin on 6/30/16.
 */

import React from 'react'

export function noop() {
  
}

export function randomArray(min = 0, max = 1, size) {
  let ret = [];
  for (let i=0; i<size; i++) {
    ret.push(random(min, max));
  }
  return ret;
}

export function random(min = 0, max = 1) {
  let range = max - min;
  return min + Math.round(Math.random() * range);
}