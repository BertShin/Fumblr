import {
  RECEIVE_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS
} from '../../actions/session_actions';
import merge from 'lodash/merge';

const clearErrors = [];

const SessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return action.payload;
    case RECEIVE_USER:
      return clearErrors;
    case CLEAR_ERRORS:
      return clearErrors;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
