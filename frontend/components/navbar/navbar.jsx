import React from 'react';
import { Link, Redirect } from 'react-router-dom';
// import SearchBarContainer from './searchbar_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.topFunction = this.topFunction.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  topFunction(e) {
    e.preventDefault();
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render () {
    return (
      <div id="main-nav" className="animated navfadeInDown">
        <nav className='left-nav'>
          <ul>
            <a onClick={(e) => this.topFunction(e)}><p>F</p></a>
            <span className="fas fa-search"></span>
            <input
              type="text"
              placeholder="Nothing to Search Yet!"
              />
          </ul>
        </nav>
        <nav className='right-nav'>
          <ul>
            <a target="_blank" id="soccer" href='http://www.fifa.com/womens-football/index.html'></a>
            <a target="_blank" id="tennis" href='https://www.usta.com/en/home.html'></a>
            <a target="_blank" id="mlb" href='https://www.mlb.com/'></a>
            <a target="_blank" id="nfl" href='https://www.nfl.com/'></a>
            <a target="_blank" id="nba" href='http://nba.com'></a>
            <a target="_blank" id="tumblr" href="https://www.tumblr.com/"></a>
            <button onClick={(e) => this.handleLogout(e)}></button>
          </ul>
        </nav>
      </div>
    );
  }
}


export default NavBar;
