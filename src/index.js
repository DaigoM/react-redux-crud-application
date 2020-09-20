import React from 'react';
import ReactDOM from 'react-dom';
// store作成パッケージ
import { createStore } from 'redux'
// storeを全コンポーネントに渡す機能を持つ
import { Provider } from 'react-redux'

import './index.css';
import reducer from './reducers'
import App from './components/App';
import * as serviceWorker from './serviceWorker';

// store生成
// 唯一のstore
// アプリケーション内部の全stateはこのstoreに集約されている
const store = createStore(reducer)

// Providerのおかげでコンポーネント間でバケツリレーをする必要がなくなる
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
