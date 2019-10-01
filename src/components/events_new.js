import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { postEvent } from '../actions'
import { Field, reduxForm } from 'redux-form'

class EventsNew extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  // この引数は、jsxとして書いたタグの属性のようだ
  renderField(field) {
    const { input, type, label, name, meta: { touched, error} } = field
    console.log(field)
    console.log(input)
    return (
      <div>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
      </div>
    )
  }
  async onSubmit(values) {
    console.log('onSubmit')
    console.log(values)
    await this.props.postEvent(values)
    // これでページ遷移できる
    this.props.history.push("/events")
  }
  render() {
    console.log(this.props)
    // handleSubmitは、reduxFormから渡ってきているもの。
    const { handleSubmit, pristine, submitting } = this.props
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" title="hoge" name="title" component={this.renderField}/></div>
          <div><Field label="Body" name="body" component={this.renderField}/></div>
          <div>
            <input type="submit" value="Submit" disabled={pristine || submitting}/>
            <Link to="/events">Cancel</Link>
          </div>
        </form>
      </React.Fragment>
    )
  }
}

const validate = values => {
  const errors = {}

  if(!values.title) errors.title = "Enter a title, please."
  if(!values.body) errors.body = "Enter a body, please."

  return errors
}
console.log('mapDispatchToProps')
const mapDispatchToProps = { postEvent }

export default connect(null, mapDispatchToProps )(
  // reduxFormは、コンポーネントをデコレートするための関数を返す
  // なんでこんなややこしいことすんだ。reduxForm({form: ''}, EventsNew)でいいじゃないか
  reduxForm({validate, form: 'eventNewForm'})(EventsNew)
)
