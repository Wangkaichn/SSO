import http from '@src/utils/axios'

export const FETCH_CURRENT_USER_REQUEST = 'FETCH_CURRENT_USER_REQUEST'
export const FETCH_CURRENT_USER_SUCCESS = 'FETCH_CURRENT_USER_SUCCESS'
export const FETCH_CURRENT_USER_FAILURE = 'FETCH_CURRENT_USER_FAILURE'

export const fetchCurrent = () => async (dispatch) => {
  dispatch({
    type: FETCH_CURRENT_USER_REQUEST
  })
  const {
    data: { data: user }
  } = await http.get('/oauth/me')
  window.currentUser = user
  dispatch({
    type: FETCH_CURRENT_USER_SUCCESS,
    payload: user
  })
}

export default {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
  FETCH_CURRENT_USER_FAILURE,
  fetchCurrent,
}
