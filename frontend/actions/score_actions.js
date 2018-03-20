import * as ScoreAPIUtil from '../util/score_util';

export const FETCH_GAME_DATA = "FETCH_GAME_DATA";

const receiveGameData = (data) => ({
  type: FETCH_GAME_DATA,
  payload: data
});

export const fetchGameData = (sport, forDate) => dispatch => (
  ScoreAPIUtil.fetchGame(sport, forDate).then((serverData) => dispatch(receiveGameData(serverData)))
);
