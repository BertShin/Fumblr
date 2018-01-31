import {
  RECEIVE_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const clearErrors = [];

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ERRORS:
      newState = [];
      newState.concat(action.payload);
      return newState;
    case RECEIVE_USER:
      return clearErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
