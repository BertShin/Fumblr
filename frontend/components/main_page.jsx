import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import FeedIndexContiner from './post/feed_index_container';
import PostFormContainer from './post/post_form_container';
import ScoreIndexContainer from './score/score_index_container';
import MainPagePersonalPlugs from './main_page_plugs';

const MainPage = () => (
  <section>
    <Switch>
      <AuthRoute exact path='/' component={SessionFormContainer}/>
      <AuthRoute exact path='/login' component={SessionFormContainer}/>
    </Switch>
    <section className='main-container'>
      <ProtectedRoute path='/dashboard' component={NavBarContainer}/>
      <ProtectedRoute path='/dashboard' component={PostFormContainer}/>
      <ProtectedRoute path='/dashboard' component={FeedIndexContiner}/>
      <ProtectedRoute path='/dashboard' component={ScoreIndexContainer}/>
      <ProtectedRoute path='/dashboard' component={MainPagePersonalPlugs}/>
    </section>
  </section>
);


export default MainPage;
