import axios from 'axios'

export const READ_EVENTS = "READ_EVENTS"
export const CREATE_EVENTS = "CREATE_EVENTS"

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const read_events = () => async (dispatch) => {
  console.log('read_events action creator')
  const response =  await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  // ここでディスパッチまで実行してしまうのか。
  // ってことは、ここでreducerが実行されるってことだよな？
  // なんでそこまでする必要があったのだろう。{ type: xxxx }だけ返せばいいのに。
  dispatch({type: READ_EVENTS, response})
}

export const postEvent = (values) => async (dispatch) => {
  console.log('postEvent action creator')
  const response =  await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({type: CREATE_EVENTS, response})
}
