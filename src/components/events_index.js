import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { read_events } from '../actions'

// Re-export with a default theme
// import { makeStyles } from '@material-ui/core/styles';
// Original module with no default theme
// import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

// fab means floating action button
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

// const useStyles = makeStyles((theme) => ({
//   // I want to use default theme for whole component.
//   fab: {
//     position: 'absolute',
//     bottom: theme.spacing(2),
//     right: theme.spacing(2)
//   }
// }))

const styles = (theme) => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
})

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
          <TableRow key={event.id}>
            <TableCell>{event.id}</TableCell>
            <TableCell><Link to={"/events/" + event.id}>{event.title}</Link></TableCell>
            <TableCell>{event.body}</TableCell>
          </TableRow>
        )
      })
    )
  }
  render() {
    const props = this.props
    const classes = props.classes
    console.log(props.events)

    return (
      <React.Fragment>
        <Fab className={classes.fab}>
          <Link to="/events/new">
            <AddIcon />
          </Link>
        </Fab>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Body</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}
console.log('mapStateToProps')
const mapStateToProps = state => ({events: state.events})
console.log('mapDispatchToProps')
const mapDispatchToProps = { read_events }

// withStyles
// https://onecompiler.com/questions/3ut9zyuga/material-ui-error-invalid-hook-call-hooks-can-only-be-called-inside-of-the-body-of-a-function-component
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(EventsIndex))
