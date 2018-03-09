import React from 'react';
import { connect } from 'react-redux';
import { fetchGameData } from '../../actions/score_actions';
import ScorePanel from './score_panel.jsx';


const mapStateToProps = (state, ownProps) => {
  // Currently Using a free API that only provides scores from
  // any year but the current year, Therefore need logic to first grab
  // the correct parameter for the API call and make sure its from the
  // previous year.
  let date = new Date();
  date.setDate(date.getDate() - 365);

  let year = date.getFullYear();

  let month = ((date.getMonth() + 1).toString());
    month = month.length > 1 ? month : '0' + month;
  let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
  
  let desiredDate = year + month + day;
  let displayDate = month + "/" + day + "/" + year;

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
