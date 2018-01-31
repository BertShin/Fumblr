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

  handleChange(e, type) {
    this.setState({ [type]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === 'login') {
      this.props.login(this.state);
    } else {
      this.props.signup(this.state);
    }
    this.setState({
      email: "",
      username: "",
      password: ""
    });
  }

  render () {
    let formType = this.props.formType;
    let linkType;
    let message;
    if (formType === 'SignUp') {
      linkType = "/login";
      message = "Already Signed Up??";
    } else {
      linkType = "/signup";
      message = "Need an Account?? Sign Up!";
    }
    return (
      <div>
        <form>
          { formType === 'SignUp' &&
            <div>
              <label>Email:
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(e) => this.handleChange(e, 'email')}
                  />
              </label>
              <br></br>
            </div>
          }
          <label>Username:
            <input
              type="text"
              value={this.state.username}
              onChange={(e) => this.handleChange(e, 'username')}
              />
          </label>
          <br></br>
          <label>Password:
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.handleChange(e, 'password')}
              />
          </label>
          <input type="submit" value={formType}/>
          <br></br>
          <Link to={linkType}>{message}</Link>
        </form>
      </div>
    );
  }
}

export default SessionForm;
