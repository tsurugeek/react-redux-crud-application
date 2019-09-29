import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { read_events } from '../actions'

class EventsIndex extends Component {
  componentDidMount(){
    // componentのライフサイクルは以下。
    // constructor -> render -> componentDidMount
    // render -> componentDidMountの間にユーザは気づかないらしい、というのは嘘
    console.log('componentDidMount')
    console.log(this.props)
    this.props.read_events()
  }

  renderEvents() {
    return (
      _.map(this.props.events, (event) => {
        return (
          <tr key={event.id}>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
          </tr>
        )
      })
    )
  }
  render() {
    const props = this.props
    console.log(props.events)

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
        <Link to="/events/new">new event</Link>
      </React.Fragment>
    )
  }
}
console.log('mapStateToProps')
const mapStateToProps = state => ({events: state.events})
console.log('mapDispatchToProps')
const mapDispatchToProps = { read_events }

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
