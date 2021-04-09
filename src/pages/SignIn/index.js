import React, {Component} from 'react';
import {connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  changePhoneActionCreator,
  changePassword,
  login
} from '../../actions/SignInActions'

import { ROUTES } from '../../const';
import './style.css';

class SignInPage extends Component {

  onChangePhone=(e) => {
   this.props.changePhoneActionCreator(e.target.value)
  }

  onChangePassword =(e) => {
    this.props.changePassword(e.target.value)
  }

  onLogin = () => {
    this.props.login(this.props.phone, this.props.password)
  }

  
  render() {
    const { phone, password, userData, error } = this.props;
    return (
      <div className="page">
        <div className="page-sign-in">
          <input
            type="text"
            placeholder="phone number"
            onChange={this.onChangePhone}
            value={phone}
          />
          <input
            type="text"
            placeholder="password"
            onChange={this.onChangePassword}
            value={password}
          />
          <div>
            {userData && (
              <span>{userData.name.first} {userData.name.last}</span>
            )}
          </div>
          <span className="text-field error-text">{error}</span>
          <button onClick={this.onLogin}>Sign in</button>
        </div> 
        {/* {{userData !== null && <Redirect to={ROUTES.MAIN} />} */}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    phone: state.signIn.phone,
    password: state.signIn.password,
    userData: state.signIn.userData,
    error:state.signIn.error
  }
}

const actions = {
  changePhoneActionCreator,
  changePassword,
  login
}

export default connect(mapStateToProps,actions)(SignInPage);
