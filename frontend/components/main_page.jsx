import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import TemporaryContainer from './temp_comp_container';
import FeedIndexContiner from './post/feed_index_container';
import PostFormContainer from './post/post_form_container';

const MainPage = () => (
  <body>
    <Switch>
      <AuthRoute exact path='/' component={SessionFormContainer}/>
      <AuthRoute exact path='/login' component={SessionFormContainer}/>
    </Switch>
    <ProtectedRoute path='/dashboard' component={NavBarContainer}/>
    <ProtectedRoute path='/dashboard' component={PostFormContainer}/>
    <ProtectedRoute path='/dashboard' component={FeedIndexContiner}/>
  </body>
);
// <ProtectedRoute path='/dashboard' component={TemporaryContainer} />
// <Redirect to="/login"/>

export default MainPage;
