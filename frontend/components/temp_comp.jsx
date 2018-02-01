import React from 'react';
import {Redirect} from 'react-router-dom';

class Temporary extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.logout();
  }

  render () {
    return (
      <div className="temporary">
        <h1 className="animated greetings"> Greetings {this.props.user}!!</h1>
        <h1 className="animated sorry">We Are Under Construction</h1>
        <h1 className='animated workin'> I'm workin' on it :D </h1>
        <h1 className='animated logout'>Just refresh to log out~</h1>
        <h1 className='animated or'>or watch the doge</h1>
      </div>
    );
  }
}

export default Temporary;
