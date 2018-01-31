import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';

const MainPage = () => (
  <div>
    <header>
      <h1> fümblr </h1>
      <Route path='/signup' component={SessionFormContainer}/>
      <Route path='/login' component={SessionFormContainer}/>
    </header>
  </div>
);

export default MainPage;
