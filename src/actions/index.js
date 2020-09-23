import axios from 'axios'

// 再利用
export const READ_EVENTS = 'READ_EVENTS'
export const POST_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
// GET, POST, PUT, DELETEなどをする際に使用するURL
const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
// パラメータ
const QUERYSTRING = "?token=token123"

// アクション・クリエイト
// readEvents定義
// 内部の関数はdispatch getStateというstoreメソッドを受け取ることができる
export const readEvents = () => async dispatch => {
    // 非同期処理でレスポンスを取得するまで待つ
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    // reducer側に渡す
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = value => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, value)
    dispatch({ type: POST_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
    dispatch({ type: DELETE_EVENT, id })
}
