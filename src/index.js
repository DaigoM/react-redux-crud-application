import React from 'react';
import ReactDOM from 'react-dom';
// store作成パッケージ
import { createStore, applyMiddleware } from 'redux';
// storeを全コンポーネントに渡す機能を持つ
import { Provider } from 'react-redux';
// middleware
// アクション・クリエイターは本来、純粋なオブジェクトを返す。
// このmiddlewareでアクションの代わりに関数を返せるようにする
import thunk from 'redux-thunk';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import * as serviceWorker from './serviceWorker';

// store生成
// 唯一のstore
// アプリケーション内部の全stateはこのstoreに集約されている
const store = createStore(reducer, applyMiddleware(thunk))

// Providerのおかげでコンポーネント間でバケツリレーをする必要がなくなる
ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/events/new" component={EventsNew} />
          
          <Route exact path="/" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
