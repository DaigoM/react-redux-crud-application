// reducerを結合するためのオブジェクトをインポート
import { combineReducers } from 'redux'
// 複数のreducerをインポート
import count from './count'

// export default combineReducer ({ count, bae, abe, etc })
export default combineReducers ({ count })