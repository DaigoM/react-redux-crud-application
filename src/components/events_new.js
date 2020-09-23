import React, { Component } from 'react';
// connect関数をインポート
import { connect } from 'react-redux'
// 入力コンポーネント
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
// actionsをインポート
import { postEvent } from '../actions'

// イベントの新規作成画面
class EventsNew extends Component {

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    renderField(field){
        const { input, label, type, meta: { touched, error } } = field

        return (
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>)
    }

    async onSubmit(values) {
        await this.props.postEvent(values)
        this.props.history.push('/')
    }

    render(){
        const { handleSubmit } = this.props

        return (
            <React.Fragment>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Field label="Title" name="title" type="text" component={this.renderField} />
                    <Field label="Body" name="body" type="text" component={this.renderField} />

                    <div>
                        <input type="submit" value="submit" disabled={false} />
                        <Link to="/">Cancel</Link>
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

const mapDispatchToProps = ({ postEvent })

// connect実行
export default connect(null, mapDispatchToProps)(
    reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)