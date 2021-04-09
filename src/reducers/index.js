import { combineReducers } from 'redux';

import SignInReducer from './SignInReducer';
import UsersReducer from './UsersReducer';

export default combineReducers({
  signIn: SignInReducer,
  users:UsersReducer,
})