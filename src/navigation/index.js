import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from '../pages/Main';
import UsersPage from '../pages/Users';
import ProfilePage from '../pages/Profile';
import SignInPage from '../pages/SignIn';

import { Navbar } from '../components';
import { ROUTES } from '../const';

class Navigator extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path={'/users/:index'} component={ProfilePage} />
          <Route path={ROUTES.USERS} component={UsersPage} />
          <Route path={ROUTES.SIGNIN} component={SignInPage} />
          <Route path={ROUTES.MAIN} component={MainPage} />
        </Switch>
      
      </BrowserRouter>
    )
  }
};

export default Navigator;