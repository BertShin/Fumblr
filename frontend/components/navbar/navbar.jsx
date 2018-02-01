import React from 'react';
import { Link, Redirect } from 'react-router-dom';


class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault;
    this.props.logout();
    return (
      <Redirect to="/login"/>
    );
  }

  render () {
    return (
      <div>
        <button onClick={(e) => this.handleLogout(e)}>Logout</button>
      </div>
    );
  }
}


export default NavBar;
