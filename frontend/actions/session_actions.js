import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


const receiveCurrentUser = currentUser => ({
  type: RECEIVE_USER,
  payload: currentUser
});

const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  payload: errors
});


export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(serverUser => (
    dispatch(receiveCurrentUser(serverUser))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);
