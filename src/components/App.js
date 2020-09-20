import React, { Component } from 'react';
// connect関数をインポート
import { connect } from 'react-redux'

// actionsをインポート
import { increment, decrement } from '../actions'

// コンポーネント
class App extends Component {
  // レンダー
  render(){
    // 
    const props = this.props

    return (
      <React.Fragment>
        <div>value: { props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

// mapStateToProps
// stateの情報からこのコンポーネントに必要な物を取り出して
// コンポーネント内のpropsとしてマッピングする機能を持つ関数
const mapStateToProps = state => ({ value: state.count.value })

// mapDispachToProps
// あるアクションが派生した際に、reducerにタイプに応じた
// 状態繊維を実行させるための関数

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ increment, decrement })

// connect実行
export default connect(mapStateToProps, mapDispatchToProps)(App)