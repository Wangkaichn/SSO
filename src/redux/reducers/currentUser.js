import {
  FETCH_CURRENT_USER_REQUEST,
  FETCH_CURRENT_USER_SUCCESS,
} from '../actions/currentUser'

const defaultState = {
  currentUser: {},
  isFetching: true
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload,
        isFetching: false
      }
    }
    default:
      return state
  }
}
