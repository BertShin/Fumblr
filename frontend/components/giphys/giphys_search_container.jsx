import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchGiphys } from '../../actions/giphy_actions';
import GiphysSearch from './giphys_search';


const mapStateToProps = (state, ownProps) => ({
  giphys: state.giphys
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSearchGiphys: (searchTerm) => dispatch(fetchSearchGiphys(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(GiphysSearch);
