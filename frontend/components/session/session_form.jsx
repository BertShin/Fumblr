import React from 'react';
import { Link, Redirect, NavLink } from 'react-router-dom';
import PersonalPlugs from '../personal_plugs';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.setState({
      email: "",
      username: "",
      password: ""
    });
  }

  handleGuest(e) {
    this.setState({
      username: "Guest",
      password: 'albert'
    });
    const user = Object.assign({}, this.state);
    this.props.errors = null;
    this.props.processForm(user);
  }

  // handleGuest(e) {
  //   e.preventDefault();
  //   const date = new Date();
  //   date = date.toString();
  //   const number = date.slice(8, 10);
  //   if (this.props.match.path === '/') {
  //     this.setState({
  //       email: `bestGuest${number}@aa.com`,
  //       username: `Guest${number}`,
  //       password: `albert${number}`
  //     });
  //   } else {
  //     this.setState({
  //       username: `Guest`,
  //       password: `albert`
  //     });
  //   }
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user);
  // }

  renderErrors() {
    if (this.props.errors === null) {
      return (
        []
      );
    }
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    let formType = this.props.formType;
    let linkType;
    let message;
    if (formType === 'SignUp') {
      linkType = "/login";
      message = "Already Signed Up or Demo?";
    } else {
      linkType = "";
      message = "Need an Account? Sign Up!";
    }
    return (
      <div className="main-session">
        <h1 className="login-logo animated rollIn">fümblr</h1>
        <h3 className="sub-header animated zoomInLeft"> Your HQ for everything Sports </h3>
        <form className="session-form animated fadeInUp" onSubmit={(e) => this.handleSubmit(e)}>
          {this.renderErrors()}
          <br></br>
          { formType === 'SignUp' &&
            <div>
              <input
                type="text"
                value={this.state.email}
                onChange={(e) => this.handleChange(e, 'email')}
                placeholder="Email"
                />
              <br></br>
            </div>
          }
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.handleChange(e, 'username')}
            placeholder="Username"
            />
          <br></br>
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e, 'password')}
            placeholder="Password"
            />
          <br></br>
          <button>{formType}</button>
          <br></br>
          { formType === 'Login' &&
            <button onClick={(e) => this.handleGuest(e)}>Try a Demo</button>
          }
          <NavLink
            onClick={this.props.clearAllErrors()}
            exact
            to={linkType}
            >{message}</NavLink>
        </form>
        <PersonalPlugs />
      </div>
    );
  }
}

export default SessionForm;
