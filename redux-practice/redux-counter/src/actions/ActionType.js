/*
  Action의 종류들을 선언합니다.
  앞에 export를 붙임으로서 나중에 이것들을 불러올 때
  import * as types from './ActionTypes'를 할 수 있어요
*/
export const CREATE = 'CREATE';
export const REMOVE = 'REMOVE';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';

// 액션을 선언할 때에는 위와같이 대문자로 선언하면 됩니다.