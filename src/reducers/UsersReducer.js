import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  users: [],
  usersLoading:false,
}
const reducer = (state = initialState, action) => {

  if (action.type === ACTIONS_TYPES.GET_USER_START) {
    return {
      ...state,
      usersLoading:true
    }
  }

  if (action.type === ACTIONS_TYPES.GET_USER_SUCCESS) {
    return {
      ...state,
      users: action.payload,
      usersLoading:false
    }
  }

  if (action.type === ACTIONS_TYPES.GET_USER_FAILURE) {
    return {
      ...state,
      error: action.payload
    }
  }

  return state;
}

export default reducer;