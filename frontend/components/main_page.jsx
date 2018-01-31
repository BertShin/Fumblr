import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
import { AuthRoute, Protected } from '../util/route_util';

const MainPage = () => (
  <div>
    <header>
      <AuthRoute exact path='/signup' component={SessionFormContainer}/>
      <AuthRoute exact path='/login' component={SessionFormContainer}/>
      <Redirect from="/" to="/signup"/>
    </header>
  </div>
);

export default MainPage;
