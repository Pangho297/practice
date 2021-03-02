import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';

// Redux 관련 불러오기
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

// 스토어 생성(Redux Devtool Extension)
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Provider 컴포넌트를 사용해 리액트 앱에 스토어 연동하기
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

/*
  Provider는 react-redux라이브러리에 내장되어있으며
  리액트 앱에 스토어를 손쉽게 연동할 수 있도록 도와주는 컴포넌트 입니다.
  이 컴포넌트를 불러온 다음 연동할 컴포넌트를 감싸준 다음
  Provider 컴포넌트의 props로 store값을 설정해주면 됩니다.
*/
