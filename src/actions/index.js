// 再利用
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// アクション・クリエイト
// increment定義
export const increment = () => ({
    type: INCREMENT
})
// decrement定義
export const decrement = () =>({
    type: DECREMENT
})