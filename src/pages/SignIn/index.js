import axios from 'axios';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  changePhoneActionCreator,
  changePassword,
  login
} from '../../actions/SignInActions'

import { ROUTES } from '../../const';
import './style.css';

const SignInPage = () => {

  const dispatch = useDispatch();
  const phone = useSelector(state => state.signIn.phone);
  const password = useSelector(state => state.signIn.password);
  const userData = useSelector(state => state.signIn.userData);
  const error = useSelector(state => state.signIn.error);

  const onChangePhone = useCallback((e) => {
    dispatch(changePhoneActionCreator(e.target.value));
  }, [dispatch]);

  const onChangePassword = useCallback((e) => {
    dispatch(changePassword(e.target.value));
  }, [dispatch]);

  const onLogin = () => {
      dispatch(login(phone,password));
  }

  return (
    <div className="page">
      <div className="page-sign-in">
        <input
          type="text"
          placeholder="phone number"
          onChange={onChangePhone}
          value={phone}
        />
        <input
          type="text"
          placeholder="password"
          onChange={onChangePassword}
          value={password}
        />
        <div>
          {userData && (
            <span>{userData.name.first} {userData.name.last}</span>
          )}
        </div>
        <span className="text-field error-text">{error}</span>
        <button onClick={onLogin}>Sign in</button>
      </div>
      {/* {userData !== null && <Redirect to={ROUTES.MAIN} />} */}
    </div>
  )
}

export default SignInPage;