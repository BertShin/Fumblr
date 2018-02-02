import React from 'react';
import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, signup, clearAllErrors } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  let formType;
  if (ownProps.match.path === '/') {
    formType = 'Sign Up';
  } else {
    formType = "Log In";
  }
  return {
    loggedIn: Boolean(state.session.currentUser),
    formType: formType,
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let fn;
  if (ownProps.match.path === "/login") {
    fn = (user) => login(user);
  } else if (ownProps.match.path === "/") {
    fn = (user) => signup(user);
  }
  return {
    processForm: (user) => dispatch(fn(user)),
    clearAllErrors: () => dispatch(clearAllErrors())
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
