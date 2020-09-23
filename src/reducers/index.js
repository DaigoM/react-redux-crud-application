// reducerを結合するためのオブジェクトをインポート
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
// 複数のreducerをインポート
import events from './events';

// export default combineReducer ({ count, bae, abe, etc })
export default combineReducers ({ events, form })