import React from 'react';
import { Link, Redirect } from 'react-router-dom';


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
      this.props.history.push('/');
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

  renderErrors() {
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
      message = "Already Signed Up?";
    } else {
      linkType = "/signup";
      message = "Need an Account? Sign Up!";
    }
    return (
      <div className="main-session">
        <h1 className="login-logo animated rollIn">fümblr</h1>
        <form className="session-form" onSubmit={(e) => this.handleSubmit(e)}>
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
          <Link to={linkType}>{message}</Link>
        </form>
      </div>
    );
  }
}

export default SessionForm;
