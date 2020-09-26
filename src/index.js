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
import { composeWithDevTools } from 'redux-devtools-extension';

// UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.css';
import reducer from './reducers';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import EventsShow from './components/events_show';
import * as serviceWorker from './serviceWorker';

// store生成
// 唯一のstore
// アプリケーション内部の全stateはこのstoreに集約されている
const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer)

// Providerのおかげでコンポーネント間でバケツリレーをする必要がなくなる
ReactDOM.render(
    <MuiThemeProvider>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/events/new" component={EventsNew} />
            <Route path="/events/:id" component={EventsShow} />
            <Route exact path="/" component={EventsIndex} />
            <Route exact path="/events" component={EventsIndex} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
