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
    this.loginSpeed = 110;
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
  }

  handleGuest(e) {
    e.preventDefault();
    this.demoLogin("username", "HelloGuest", (
      () => this.demoLogin("password", 'hopetheyhireme', (
        () => this.props.processForm(this.state)
      ))
    ));
  }

  demoLogin(field, DemoUser, cb) {
    let textToType = "";
    const typing = () => {
      textToType = DemoUser.substring(0, textToType.length + 1);
      this.setState({ [field]: textToType });
      if (textToType.length === DemoUser.length) {
        setTimeout(() => cb(), this.loginSpeed);
      } else {
        setTimeout(() => typing(), this.loginSpeed);
      }
    };
    typing();
  }


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
    if (formType === 'Sign Up') {
      linkType = "/login";
      message = "Logging In or Try a Demo?";
    } else {
      linkType = "/";
      message = "Need an Account? Sign Up!";
    }
    setTimeout(function(){
      document.getElementById("myVideo").play();
    }, 5000);
    return (
      <div className="main-session">

        { setTimeout(function(){
          document.getElementById("myVideo").play();
          }, 1900) &&
          <video id="myVideo" loop>
            <source src="http://res.cloudinary.com/bertshin/video/upload/v1517533652/Basketball_-_12609_tniwpg.mp4" type='video/mp4' />
          </video>
        }

        <h1 className="login-logo animated rollIn">fümblr.</h1>
        <h3 className="sub-header animated zoomInLeft"> Your HQ for Everything Sports </h3>
        <form className="session-form animated fadeInDown" onSubmit={(e) => this.handleSubmit(e)}>
          {this.renderErrors()}
          <br></br>
          { formType === 'Sign Up' &&
              <input
                className='email'
                type="text"
                value={this.state.email}
                onChange={(e) => this.handleChange(e, 'email')}
                placeholder="Email"
                />
          }
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.handleChange(e, 'username')}
            placeholder="Username"
            />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.handleChange(e, 'password')}
            placeholder="Password"
            />
          <br></br>
          <br></br>
          <button>{formType}</button>
          <br></br>
          { formType === 'Log In' &&
            <button id="demo" onClick={(e) => this.handleGuest(e)}>Try a Demo</button>
          }
          <br></br>
          <br></br>
          <Link
            className="selected"
            onClick={this.props.clearAllErrors()}
            exact
            to={linkType}
            >{message}</Link>
        </form>
        <PersonalPlugs />
      </div>
    );
  }
}

export default SessionForm;
