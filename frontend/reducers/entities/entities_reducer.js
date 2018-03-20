import { combineReducers } from 'redux';
import PostReducer from './post_reducer';

export default combineReducers({
  posts: PostReducer
});
