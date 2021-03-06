import React from ‘react‘;
import ReactDOM from ‘react-dom‘;
import ‘./index.css‘;
import App from ‘./App‘;
import * as serviceWorker from ‘./serviceWorker‘;
import { BrowserRouter } from ‘react-router-dom‘;
import { createStore, applyMiddleware } from ‘redux‘;
import { Provider } from ‘react-redux‘;
import thunk from ‘redux-thunk‘;
import rootReducer from ‘./modules‘;


const store = createStore(
  rootReducer,
  window._ _PRELOADEDSTATE _, // 이 값을 초기 상태로 사용함
  applyMiddleware(thunk)
);



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById(‘root‘)
);



serviceWorker.unregister();