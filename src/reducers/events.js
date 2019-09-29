import _ from 'lodash'
import { READ_EVENTS } from "../actions"

export default (state = {}, action) => {
  console.log('events reducer. type=' + action.type)
  switch(action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    default:
      return state
  }
}
