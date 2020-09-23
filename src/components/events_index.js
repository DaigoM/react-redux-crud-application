import React, { Component } from 'react';
// connect関数をインポート
import { connect } from 'react-redux'
import _ from 'lodash';
import { Link } from 'react-router-dom'
// actionsをインポート
import { readEvents } from '../actions'

// コンポーネント
class EventsIndex extends Component {
  // コンポーネントがマウントされた時に起きるcallback
  componentDidMount(){
    this.props.readEvents()
  }

  // テーブルの各行のデータを記載
  renderEvents(){
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  // レンダー関数
  // テーブルの表示
  render(){
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">New Event</Link>
      </React.Fragment>
    )
  }
}

// mapStateToProps
// stateの情報からこのコンポーネントに必要な物を取り出して
// コンポーネント内のpropsとしてマッピングする機能を持つ関数
const mapStateToProps = state => ({ events: state.events })

// mapDispachToProps
// あるアクションが派生した際に、reducerにタイプに応じた
// 状態繊維を実行させるための関数

// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })
const mapDispatchToProps = ({ readEvents })

// connect実行
export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)