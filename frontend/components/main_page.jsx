import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import TemporaryContainer from './temp_comp_container';

const MainPage = () => (
  <div>
    <header>
      <Switch>
        <AuthRoute exact path='/' component={SessionFormContainer}/>
        <AuthRoute exact path='/login' component={SessionFormContainer}/>
        <ProtectedRoute path='/dashboard' component={NavBarContainer}/>
        <Redirect to="/login"/>
      </Switch>
    </header>
  </div>
);
// <ProtectedRoute path='/dashboard' component={TemporaryContainer} />

export default MainPage;
