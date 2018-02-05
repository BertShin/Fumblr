import { combineReducers } from 'redux';
import SessionErrorsReducer from './session_errors_reducer';
import PostErrorsReducer from './post_error_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  post: PostErrorsReducer
});
