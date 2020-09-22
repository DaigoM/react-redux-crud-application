import _ from 'lodash'
// アクションのインポート
import { READ_EVENTS } from '../actions'

// このreducerは関数として定義
export default (events = {}, action) => {
    // タイプに応じて状態を変化
    // importしたactionを対応
    switch (action.type) {
        case READ_EVENTS:
            // データの取得

            // 配列構造
            // action.response.data

            // オブジェクト
            // _.mapKeys(action.response.data, 'id')

            return _.mapKeys(action.response.data, 'id')
        default :
            return events
    }
}
