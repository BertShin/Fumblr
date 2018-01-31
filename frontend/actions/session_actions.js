import * as SessionAPIUti from "../util/session_api_util";

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


export const login = (user) => dispatch => (
  SessionAPIUti.login(user).then(
    serverUser => dispatch(receiveCurrentUser(serverUser)),
    err => dispatch(receiveErrors(err))
  )
);

export const signup = (user) => dispatch => (
  SessionAPIUti.signup(user).then( serverUser => dispatch(receiveCurrentUser(serverUser))),
  ((err) => dispatch(receiveErrors(err)))
);

export const logout = () => dispatch => (
  SessionAPIUti.logout().then( () => dispatch(receiveCurrentUser(null))),
  (err) => dispatch(receiveErrors(err))
);
