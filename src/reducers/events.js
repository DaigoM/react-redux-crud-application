import _ from 'lodash'
// アクションのインポート
import { CREATE_EVENT, READ_EVENTS, READ_EVENT, DELETE_EVENT, UPDATE_EVENT } from '../actions'

// このreducerは関数として定義
export default (events = {}, action) => {
    // タイプに応じて状態を変化
    // importしたactionを対応
    switch (action.type) {
        case CREATE_EVENT:
        case READ_EVENT:
        case UPDATE_EVENT:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            // データの取得

            // 配列構造
            // action.response.data

            // オブジェクト
            // _.mapKeys(action.response.data, 'id')

            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENT:
            delete events[action.id]
            // スプレット演算子
            // updateされたデータをreducerが返してくれる
            return { ...events}
        default :
            return events
    }
}
