import ACTIONS_TYPES from '../actions/actionsTypes'

const initialState = {
  phone: '',
  password: '',
  userData: null,
  error: '',
  loginLoading: false,
}
const reducer = (state = initialState, action) => {

  if (action.type === ACTIONS_TYPES.CHANGE_PHONE) {
    return {
      ...state,
      phone: action.payload
    }
  }

  if (action.type === ACTIONS_TYPES.CHANGE_PASSWORD) {
    return {
      ...state,
      password: action.payload
    }
  }

  if (action.type === ACTIONS_TYPES.LOGIN_START) {
    return {
      ...state,
      loginLoading: true
    }
  }

  if (action.type === ACTIONS_TYPES.LOGIN_SUCCESS) {
    return {
      ...state,
      userData: action.payload,
      phone: '',
      password: '',
      loginLoading: false
    }
  }

  if (action.type === ACTIONS_TYPES.LOGIN_FAILURE) {
    return {
      ...state,
      error: action.payload
    }
  }
  return state
}

export default reducer