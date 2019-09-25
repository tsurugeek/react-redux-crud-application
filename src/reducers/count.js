import { INCREMENT, DECREMENT } from "../actions"

const initialState = {
  value: 0
}

export default (state = initialState, action) => {
  switch(action.type) {
    case INCREMENT:
      retun {value: state.value + 1}
    case DECREMENT:
      retun {value: state.value - 1}
    default:
      return state
  }
}
