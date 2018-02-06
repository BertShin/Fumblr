import * as GiphyUtil from '../util/giphy_api_util';

export const RECEIVE_SEARCH_GIPHYS = 'RECEIVE_SEARCH_GIPHYS';
export const REQUEST_SEARCH_GIHPYS = "REQUEST_SEARCH_GIHPYS";

export const receiveSearchGiphys = (giphys) => ({
  type: RECEIVE_SEARCH_GIPHYS,
  giphys
});

export const fetchSearchGiphys = (searchTerm) => {
  return (dispatch) => {
    GiphyUtil.fetchSearchGiphys(searchTerm)
    .then(giphys => dispatch(receiveSearchGiphys(giphys.data)));
  };
};
