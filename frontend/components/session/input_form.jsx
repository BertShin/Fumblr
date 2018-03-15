import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class InputForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleGuest = this.handleGuest.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginSpeed = 80;
    }

    handleChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleGuest(e) {
        e.preventDefault();
        this.demoLogin("username", "SerenaWilliams", (
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

    render () {
        let linkType;
        let message;

        if (this.props.formType === 'Sign Up') {
            linkType = "/login";
            message = "Logging In or Try a Demo?";
        } else {
            linkType = "/";
            message = "Need an Account? Sign Up!";
        }
    
        return (
            <form className="session-form animated fadeInDown" onSubmit={(e) => this.handleSubmit(e)}>
                {this.props.renderErrors()}

                {this.props.formType === 'Sign Up' &&
                    <input
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

                <button className="first-session-button">{this.props.formType}</button>
                {this.props.formType === 'Log In' &&
                    <button onClick={(e) => this.handleGuest(e)}>Try a Demo</button>
                }
                
                <NavLink
                    className="selected"
                    onClick={this.props.clearAllErrors()}
                    exact
                    to={linkType}
                    >{message}</NavLink>
            </form>
        );
    }
}

export default InputForm;