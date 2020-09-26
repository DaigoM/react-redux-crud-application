import React, { Component } from 'react';
// connect関数をインポート
import { connect } from 'react-redux'
import _ from 'lodash';
import { Link } from 'react-router-dom'
// UI
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
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
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  // レンダー関数
  // テーブルの表示
  render(){
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new"/>}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
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