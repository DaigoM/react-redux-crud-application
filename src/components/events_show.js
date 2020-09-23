import React, { Component } from 'react';
// connect関数をインポート
import { connect } from 'react-redux';
// 入力コンポーネント
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
// actionsをインポート
import { getEvent, deleteEvent, putEvent } from '../actions';

// イベントの新規作成画面
class EventsShow extends Component {

    constructor(props) {
        super(props)
        console.log("EventsShow")
        this.onSubmit = this.onSubmit.bind(this)
        this.onDeleteClick = this.onDeleteClick.bind(this)
    }

    renderField(field){
        const { input, label, type, meta: { touched, error } } = field

        return (
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>)
    }

    async onDeleteClick() {
        const { id } = this.props.match.params
        await this.props.deleteEvent(id)
        this.props.history.push('/')

    }

    async onSubmit(values) {
        // await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render(){
        const { handleSubmit, pristine, submitting } = this.props

        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />

                    <div>
                        <input type="submit" value="submit" disabled={pristine || submitting} />
                        <Link to="/">Cancel</Link>
                        <Link to="/" onClick={this.onDeleteClick} >Delete</Link>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

// validation関数
const validate = values => {
    const errors = {}

    if(!values.title) errors.title = "Enter a title, please."
    if(!values.body) errors.body = "Enter a body, please."

    return errors
}

const mapDispatchToProps = ({ deleteEvent })

// connect実行
export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventShowForm' })(EventsShow)
)