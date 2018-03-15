import React from 'react';
import InputForm from './input_form';
import PersonalPlugs from '../personal_plugs';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.renderErrors = this.renderErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/dashboard');
    }
  }

  renderVideo() {
    return (
      setTimeout(() => {
        document.getElementById("myVideo").play();
      }, 1900) &&
      <video id="myVideo" loop>
        <source src="http://res.cloudinary.com/bertshin/video/upload/v1517533652/Basketball_-_12609_tniwpg.mp4" type='video/mp4' />
      </video>
    );
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
    let { formType, clearAllErrors, processForm } = this.props;
    let linkType;
    let message;

    return (
      <div className="main-session">

        {this.renderVideo()}

        <h1 className="login-logo animated rollIn">fümblr.</h1>
        <h3 className="sub-header animated zoomInLeft"> Your HQ for Everything Sports </h3>
        
        <InputForm 
          formType={formType}
          linkType={linkType}
          message={message}
          handleChange={this.handleChange}
          handleGuest={this.handleGuest}
          handleSubmit={this.handleSubmit}
          processForm={processForm}
          clearAllErrors={clearAllErrors}
          renderErrors={this.renderErrors}
        />
        <PersonalPlugs />
      </div>
    );
  }
}

export default SessionForm;
