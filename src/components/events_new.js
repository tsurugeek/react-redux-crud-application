import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { read_events } from '../actions'

class EventsNew extends Component {
  render() {
    return (
      <React.Fragment>
        <div>aaa</div>
      </React.Fragment>
    )
  }
}
console.log('mapDispatchToProps')
// const mapDispatchToProps = { read_events }

export default connect(null, null)(EventsNew)
