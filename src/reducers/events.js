import _ from 'lodash'
import {
  CREATE_EVENT,
  READ_EVENT,
  READ_EVENTS,
  PUT_EVENT,
  DELETE_EVENT
} from "../actions"

export default (state = {}, action) => {
  console.log('events reducer. type=' + action.type)
  switch(action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case CREATE_EVENT:
    case READ_EVENT:
    case PUT_EVENT:
      // return _.mapKeys(action.response.data, 'id')
      // return action.response.data
      return { ...state, [action.response.data.id]: action.response.data}
    case DELETE_EVENT:
      delete state[action.response.data.id]
      return { ...state }
    default:
      return state
  }
}
