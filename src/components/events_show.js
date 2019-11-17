import React, { Component } from 'react';import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getEvent, putEvent, deleteEvent } from '../actions'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class EventsShow extends Component {
  constructor (props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteEvent = this.onDeleteEvent.bind(this)
  }
  componentDidMount () {
    console.log('componentDidMount')
    // this method is called when this component is renderd..?
    this.props.getEvent(this.props.match.params.id)
  }
  // この引数は、jsxとして書いたタグの属性のようだ
  renderField(field) {
    console.log('renderField')
    const { input, type, label, name, meta: { touched, error} } = field
    console.log(field)
    console.log(input)
    return (
      <TextField placeholder={label} // upgraded from hintText
        label={label} // upgraded from floatingLabelText
        type={type}
        error={!!(touched && error)} // upgraded from errorText
        {...input}
        fullWidth={true}
        helperText={touched ? error : ''} // upgraded from errorText
      />
    )
  }
  async onDeleteEvent() {
    console.log('onDeleteEvent')
    console.log(this.props.match)
    await this.props.deleteEvent(this.props.match.params.id)
    this.props.history.push("/events")
  }

  async onSubmit(values) {
    console.log('onSubmit')
    console.log(values)
    await this.props.putEvent(this.props.match.params.id, values)
    // これでページ遷移できる
    this.props.history.push("/events")
  }
  render() {
    console.log('render')
    console.log(this.props)
    console.log(this.props.events)
    // handleSubmitは、reduxFormから渡ってきているもの。
    const { handleSubmit, pristine, submitting, invalid } = this.props
    // const event = events[this.props.match.params.id]
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div><Field label="Title" name="title" component={this.renderField}/></div>
          <div><Field label="Body" name="body" component={this.renderField}/></div>
          <div>
            <Button type="submit" children={"submit"} disabled={pristine || submitting || invalid} />
            <Button children={<Link to="/events">Cancel</Link>} />
            <Button children={"delete"} onClick={this.onDeleteEvent} />
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
const mapStateToProps = (state, ownProps) => {
  console.log('mapStateToProps')
  const event = state.events[ownProps.match.params.id]
  console.log(event)
  // initialValues relates to enebaleReinitialize.
  // form refer initialValues when enableReinitialize equals true.
  return { initialValues: event, event }
}
console.log('mapDispatchToProps')
const mapDispatchToProps = { getEvent, putEvent, deleteEvent }

export default connect(mapStateToProps, mapDispatchToProps )(
  // reduxFormは、コンポーネントをデコレートするための関数を返す
  // なんでこんなややこしいことすんだ。reduxForm({form: ''}, EventsShow)でいいじゃないか
  reduxForm({validate, form: 'eventsShowForm', enableReinitialize: true})(EventsShow)
  // reduxForm({validate, form: 'eventsShowForm', enableReinitialize: false})(EventsShow)
)
