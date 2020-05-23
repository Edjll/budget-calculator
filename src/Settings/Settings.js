import React, { Component } from 'react';
import './css/Settings.css';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import signInImage from '../SignIn/images/login.svg';

class Settings extends Component {

    render() {
        const themes = []; let index = 0;
        for (const theme in this.props.themes) {
            themes.push(
                <option
                    key  = { index }
                    value = { theme }
                >
                    { this.props.storage.settings.themes[index] }
                </option>
            );
            index++;
        }

        const languages = []; index = 0;
        for (const language in this.props.languages) {
            languages.push(
                <option
                    key  = { index }
                    value = { language }
                >
                    { this.props.storage.settings.languages[index] }
                </option>
            );
            index++;
        }

        return (
            <div className = { `settings-wrapper settings-${ this.props.theme }` }>
                <button 
                    className = 'open-sign-in'
                    onClick = { this.props.openLogin }
                    title = { this.props.storage.signIn } 
                >
                    <img src = { signInImage } alt = 'sign in' />
                </button>
                <CalculatorButton 
                    openApp = { this.props.openApp }
                    title = { this.props.storage.app }
                />
                <form className = 'settings-form' onSubmit = { e => e.preventDefault() }>
                    <label style = { { boxShadow : `0 0 ${this.props.size * 0.01}px ${this.props.boxShadows.light}` } }>
                        <div className = { `form-description-wrapper form-description-wrapper-${ this.props.theme }` }>
                            <span style = { { fontSize : this.props.size * 0.034 } }>
                                { this.props.storage.settings.theme }
                            </span>
                            <div 
                                className = 'triangle' 
                                style = { { borderWidth : this.props.size * 0.038 } }
                            ></div>
                        </div>
                        <select 
                            value = { this.props.theme }
                            onChange = { e => this.props.changeTheme(e.target.value) }
                            style = { { fontSize : this.props.size * 0.034 } }
                        > 
                            { themes }
                        </select>
                    </label>
                    <label style = { { boxShadow : `0 0 ${this.props.size * 0.01}px ${this.props.boxShadows.light}` } }>
                    <div className = { `form-description-wrapper form-description-wrapper-${ this.props.theme }` }>
                            <span style = { { fontSize : this.props.size * 0.034 } }>
                                { this.props.storage.settings.language }
                            </span>
                            <div 
                                className = 'triangle' 
                                style = { { borderWidth : this.props.size * 0.038 } }
                            ></div>
                        </div>
                        <select 
                            value = {this.props.language }
                            onChange = { e => this.props.changeLanguage(e.target.value) }
                            style = { { fontSize : this.props.size * 0.034 } }
                        > 
                            { languages }
                        </select>
                    </label>
                </form>
            </div>
        );
    }
}

export default Settings;