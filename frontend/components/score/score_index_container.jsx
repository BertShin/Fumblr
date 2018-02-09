import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../../actions/score_actions';
import ScorePanel from './score_panel.jsx';


const mapStateToProps = (state, ownProps) => {
  // Currently Using a free API that only provides scores from
  // any year but the current year, Therefore need logic to first grab
  // the correct parameter for the API call and make sure its from the
  // previous year.
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth();

  if (month < 10 || day < 10) {
    month = (date.getMonth() + 1).toString();
    month = "0" + month;
    day = (date.getDate()).toString();
    day = "0" + day;
  } else {
    month = (date.getMonth() + 1).toString();
    day = (date.getDate()).toString();
  }

  let year = (date.getFullYear() - 1).toString();
  const desiredDate = year + month + day;
  const displayDate = month + "/" + day + "/" + year;
  return ({
    scores: state.score,
    desiredDate: desiredDate,
    displayDate: displayDate,
    month: month,
    day: day,
    year: year
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchGameData: (sport, forDate) => dispatch(fetchGameData(sport, forDate))
});


export default connect(mapStateToProps, mapDispatchToProps)(ScorePanel);
