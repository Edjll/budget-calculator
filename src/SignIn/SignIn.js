import React, { Component } from "react";
import './css/SignIn.css';
import usernameImage from './images/username.svg';
import registrationImage from './images/registration.svg';
import passwordImage from './images/password.svg';
import SettingsButton from "../SettingsButton/SettingsButton";
import loginImage from './images/login.svg';
import CalculatorButton from "../CalculatorButton/CalculatorButton";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error : {
                status : false,
                message : '',
                removing : false
            },
            active : {
                page : 'login',
                button : {
                    rotate : false
                }
            },
            user : {
                username : '',
                password : ''
            }
        }
    }

    createError(message) {
        const state = this.state;
        state.error.status = true;
        state.error.message = message;
        this.setState(state);
    }

    removingError() {
        const state = this.state;
        state.error.removing = true;

        this.setState(state);

        setTimeout(() => this.removeError(), 500);
    }

    removeError() {
        const state = this.state;
        state.error.status = false;
        state.error.message = '';
        state.error.removing = false;

        this.setState(state);
    }

    rotateButton() {
        const state = this.state;
        state.active.button.rotate = true;
        this.setState(state);

        setTimeout(() => this.changeActive(), 250);
    }

    changeActive() {
        const state = this.state;
        state.active.page = state.active.page === 'login' ? 'registration' : 'login';
        this.setState(state);

        setTimeout(() => {
            state.active.button.rotate = false;
            this.setState(state);
        }, 250);
    }

    clearForm() {
        const state = this.state;
        state.user.username = '';
        state.user.password = '';
        this.setState(state);
    }

    checkForm() {
        if (this.state.user.username.length && this.state.user.password.length) {
            let result;
            if (this.state.active.page === 'registration') result = this.props.createUser(this.state.user.username, this.state.user.password);
            else if (this.state.active.page === 'login') result = this.props.login(this.state.user.username, this.state.user.password);
            if (result.status) {
                this.clearForm();
            } else {
                this.createError(result.error);
            }
        }
    }

    inputPassword(e) {
        const state = this.state;
        state.user.password = e.target.value;
        this.setState(state);
        if (this.state.error.status) {
            this.removingError();
        }
    }

    inputUsername(e) {
        const state = this.state;
        state.user.username = e.target.value;
        this.setState(state);
        if (this.state.error.status) {
            this.removingError();
        }
    }

    render() {
        return (
            <div 
                className = { `sign-in sign-in-${ this.props.theme }` }
                style = { { boxShadow : `inset 0 0 ${this.props.size * 0.027}px -${this.props.size * 0.005}px ${this.props.boxShadows[this.props.theme]}` } }
            >
                <div className = 'container-rotate'>
                    <CalculatorButton 
                        openApp = { this.props.openApp }
                        title = { this.props.storage.app }
                    />
                    <SettingsButton 
                        settingsActive = { this.props.settingsActive }
                        openSettings = { this.props.openSettings }
                        title = { this.props.storage.settings }
                    />
                    <button 
                        className = { `open-registration ${ this.state.active.button.rotate ? 'rotate-button' : '' }` } 
                        title = { this.state.active.page === 'login' ? this.props.storage.signIn.registration : this.props.storage.signIn.login }
                        onClick = {
                            e => {
                                this.removingError();
                                this.rotateButton();
                            }
                        }
                        disabled = { this.state.active.button.rotate }
                    >
                        <img 
                            src = { this.state.active.page === 'login' ? registrationImage : loginImage } 
                            alt = { this.state.active.page } 
                        />
                    </button>
                    <form className = 'sign-in-form' onSubmit = { e => e.preventDefault() }>
                        { this.state.error.status 
                            ?   <div 
                                    className = { `error-message${ this.state.error.removing ? ' error-removing' : '' }` }
                                >
                                    <span
                                        style = { { fontSize : this.props.size * 0.035 } }
                                    >{ this.state.error.message }</span>
                                </div> 
                            : null 
                        }
                        <label style = { { boxShadow : `0 0 ${this.props.size * 0.01}px ${this.props.boxShadows.light}` } }>
                            <input
                                placeholder = { this.props.storage.signIn.username }
                                type = 'text'
                                value = { this.state.user.username }
                                maxLength = { 8 }
                                onChange = { e => this.inputUsername(e) }
                                style = { { fontSize : this.props.size * 0.04 } }
                            />
                            <img src = { usernameImage } alt = 'username' />
                        </label>
                        <label style = { { boxShadow : `0 0 ${this.props.size * 0.01}px ${this.props.boxShadows.light}` } }>
                            <input 
                                placeholder = { this.props.storage.signIn.password }
                                type = 'password'
                                value = { this.state.user.password }
                                maxLength = { 8 }
                                onChange = { e => this.inputPassword(e) }
                                style = { { fontSize : this.props.size * 0.04 } }
                            />
                            <img src = { passwordImage } alt = 'password' />
                        </label>
                        <button
                            className = { `${this.state.active.button.rotate ? 'rotate-button' : ''} sign-in-button-${this.props.theme }`}
                            onClick = { e => this.checkForm() }
                            style = { { boxShadow : `0 0 ${this.props.size * 0.01}px ${this.props.boxShadows.light}` } }
                        >
                            <span style = { { fontSize : this.props.size * 0.04 } }>
                                { this.state.active.page === 'login' ? this.props.storage.signIn.login : this.props.storage.signIn.registration }
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignIn;