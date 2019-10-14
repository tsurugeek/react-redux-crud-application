import axios from 'axios'

export const CREATE_EVENT = "CREATE_EVENT"
export const READ_EVENT = "READ_EVENT"
export const READ_EVENTS = "READ_EVENTS"
export const PUT_EVENT = "PUT_EVENT"
export const DELETE_EVENT = "DELETE_EVENT"

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
  dispatch({type: CREATE_EVENT, response})
}

export const getEvent = (id) => async (dispatch) => {
  console.log('getEvent action creator')
  console.log(id)
  const response =  await axios.get(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  console.log(response.data)
  dispatch({type: READ_EVENT, response})
}

export const putEvent = (id, values) => async (dispatch) => {
  console.log('putEvent action creator')
  const response =  await axios.put(`${ROOT_URL}/events/${id}${QUERYSTRING}`, values)
  dispatch({type: PUT_EVENT, response})
}

export const deleteEvent = (id) => async (dispatch) => {
  console.log('deleteEvent action creator')
  const response =  await axios.delete(`${ROOT_URL}/events/${id}${QUERYSTRING}`)
  dispatch({type: DELETE_EVENT, response})
}
