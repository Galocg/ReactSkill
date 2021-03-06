import React from ‘react‘;
import ReactDOMServer from ‘react-dom/server‘;
import express from ‘express‘;
import { StaticRouter } from ‘react-router-dom‘;
import App from ‘./App‘;
import path from ‘path‘;
import fs from ‘fs‘;
import { createStore, applyMiddleware } from ‘redux‘;
import { Provider } from ‘react-redux‘;
import thunk from ‘redux-thunk‘;
import rootReducer from ‘./modules‘;


(…)
// 서버 사이드 렌더링을 처리할 핸들러 함수입니다.
const serverRender = (req, res, next) => {
  // 이 함수는 404가 떠야 하는 상황에 404를 띄우지 않고 서버 사이드 렌더링을 해 줍니다.



const context = {};
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const jsx = (
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );
  const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
  res.send(createPage(root)); // 결과물을 응답합니다.
};



(…)