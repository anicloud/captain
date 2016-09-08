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

export function dateFormat(time, format) {
  let t = new Date(Number(time));
  let tf = function(i) {
    return (i<10 ? '0' : '') + i;
  };
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (token) {
    switch (token) {
      case 'yyyy':
        return tf(t.getFullYear());
      case 'MM':
        return tf(t.getMonth() + 1);
      case 'mm':
        return tf(t.getMinutes());
      case 'dd':
        return tf(t.getDate());
      case 'HH':
        return tf(t.getHours());
      case 'ss':
        return tf(t.getSeconds());
    }
  })
}
