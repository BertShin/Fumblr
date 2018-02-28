import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ScoreIndexItem from './score_index_item';
import { RingLoader } from 'react-spinners';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class Leagues extends React.Component {
  render () {
    let isSelected = this.props.selectedTab;
    let headers = this.props.leagues.map( (league, index) => {
      let title = league.title;
      let currentClass = '';
      if (index === isSelected) {
        currentClass = 'active';
      }

      return (
        <li
          key={index}
          className={currentClass}
          onClick={this.props.chosenTab.bind(null, index)}>
          {title}{' '}
        </li>
      );
    });

    return (
      <ul className='tab-header'>
        {headers}
      </ul>
    );
  }

}


class ScoreIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
      desiredDate: this.props.desiredDate,
      loading: true,
      date: moment()
    };

    this.selectTab = this.selectTab.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  componentDidMount () {
    this.props.fetchGameData("nba", this.props.desiredDate);
    // Logic for when more than one sport is in season.
    // const allSports = ["nba", nfl", "mlb"];
    // all sports are currently out of season except NBA
    // for (let i = 0; i < allSports.length; i++ ) {
    //   console.logg(this.props.fetchGameData);
    //   this.setState({
    //     [allSports[i]]: this.props.fetchGameData(allSports[i], desiredDate)
    //   });
    // }
  }

  selectTab(num) {
    this.setState({selectedTab: num});
  }


  handleBack(e) {
    e.preventDefault();
    const numDate = parseInt(this.state.desiredDate);
    const backDate = (numDate - 1).toString();
    this.props.fetchGameData("nba", backDate);
  }

  handleForward(e) {
    e.preventDefault();
    const numDate = parseInt(this.state.desiredDate);
    const forwardDate = (numDate + 1).toString();
    this.props.fetchGameData("nba", forwardDate);
  }

  render () {
    let { scores } = this.props;

    // PlaceHolder Data until RealTime API is utilized
    const leagues = [
      {title: <i className="fas fa-basketball-ball"></i>, content: scores},
      {title: <i className="fas fa-football-ball"></i>, content: [
        {awayScore: "",
          homeScore: "",
          game: {time: "*CONGRATS TO THE EAGLES THIS SEASON*", ID: "500", awayTeam: {Name: "Next Season Starts September 6th."},
          homeTeam:
          {Name: ""}}}
      ]},
      {title: <i className="fas fa-baseball-ball"></i>, content: [
        {awayScore: "",
          homeScore: "",
          game: {time: "*CONGRATS TO THE ASTROS THIS SEASON*", ID: "501", awayTeam: {Name: "Next Season Starts March 29th."},
          homeTeam:
          {Name: ""}}}
      ]},
    ];
    let league = leagues[this.state.selectedTab];
    return (
        <div className="main-score-index animated flipInY">
          <Leagues
            selectedTab={this.state.selectedTab}
            chosenTab={this.selectTab}
            leagues={leagues}
            desiredDate={this.props.desiredDate}
            fetchGameData={this.props.fetchGameData}
            >
          </Leagues>
          <ul className='tab-content'>
            <li id="current-date">
              <button onClick={this.handleBack}><i className="fas fa-chevron-circle-left"></i></button>
              <DatePicker
                selected={this.state.date}
              />
              <button onClick={this.handleForward}><i className="fas fa-chevron-circle-right"></i></button>
            </li>
            {
              league.content.map(match =>
                <ScoreIndexItem
                  key={match.game.ID}
                  awayScore={match.awayScore}
                  homeScore={match.homeScore}
                  awayTeam={match.game.awayTeam.Name}
                  homeTeam={match.game.homeTeam.Name}
                  time={match.game.time}
                  isCompleted={match.isCompleted}
                  date={match.game.date}
                  />)
                }
              </ul>
            </div>
    );
  }
}


export default ScoreIndex;
