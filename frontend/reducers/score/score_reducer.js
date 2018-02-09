import merge from 'lodash/merge';
import { FETCH_GAME_DATA } from '../../actions/score_actions';



const ScoreReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case FETCH_GAME_DATA:
      return action.payload.scoreboard.gameScore;
    default:
      return state;
  }
};

export default ScoreReducer;
