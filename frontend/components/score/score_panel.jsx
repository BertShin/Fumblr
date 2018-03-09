import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ScoreIndexItem from './score_index_item';
import { RingLoader } from 'react-spinners';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Leagues from './leagues';

class ScoreIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
      desiredDate: this.props.desiredDate,
      displayDate: this.props.displayDate,
      loading: true,
    };

    this.selectTab = this.selectTab.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleForward = this.handleForward.bind(this);
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
    
    let date = new Date(moment(this.state.desiredDate)._d);
    date.setDate(date.getDate() - 1);

    let year = date.getFullYear();
    let month = ((date.getMonth() + 1).toString());
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    
    let newDate = year + month + day;
    let newDisplay = month + "/" + day + "/" + year;

    this.setState({
      desiredDate: newDate,
      displayDate: newDisplay
    });

    console.log(this.state.desiredDate);
    this.props.fetchGameData("nba", newDate);
  }

  handleForward(e) {
    e.preventDefault();
    
    let date = new Date(moment(this.state.desiredDate)._d);
    date.setDate(date.getDate() + 1);

    let year = date.getFullYear();
    let month = ((date.getMonth() + 1).toString());
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    let newDate = year + month + day;
    let newDisplay = month + "/" + day + "/" + year;

    this.setState({
      desiredDate: newDate,
      displayDate: newDisplay
    });

    console.log(this.state.displayDate);
    this.props.fetchGameData("nba", newDate);

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
              <p>{this.state.displayDate}</p>
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
