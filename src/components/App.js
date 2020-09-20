import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

// コンポーネント
class Counter extends Component {
  //初期化処理に実行
  constructor(props){
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    console.log("click+")
    this.setState({ count: this.state.count + 1})
  }

  handleMinusButton = () => {
    console.log("click-")
    this.setState({ count: this.state.count - 1})
  }
  // レンダー
  render(){
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}



export default App;
