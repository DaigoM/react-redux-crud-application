// reducerを結合するためのオブジェクトをインポート
import { combineReducers } from 'redux'
// 複数のreducerをインポート
import events from './events'

// export default combineReducer ({ count, bae, abe, etc })
export default combineReducers ({ events })