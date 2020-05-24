import React from 'react';
import './css/Settings.css';
import CalculatorButton from '../CalculatorButton/CalculatorButton';
import signInImage from '../SignIn/images/login.svg';

const Settings = props => {

    const themes = []; let index = 0;
    for (const theme in props.themes) {
        themes.push(
            <option
                key  = { index }
                value = { theme }
            >
                { props.storage.settings.themes[index] }
            </option>
        );
        index++;
    }

    const languages = []; index = 0;
    for (const language in props.languages) {
        languages.push(
            <option
                key  = { index }
                value = { language }
            >
                { props.storage.settings.languages[index] }
            </option>
        );
        index++;
    }

    return (
        <div 
            className = { `settings settings-${ props.theme } ${props.active ? 'active' : ''}` }
            style = { { boxShadow : `inset 0 0 ${props.size * 0.027}px -${props.size * 0.005}px ${props.boxShadows[props.theme]}` } }
        >
            <button 
                className = 'open-sign-in'
                onClick = { props.openLogin }
                title = { props.storage.signIn } 
            >
                <img src = { signInImage } alt = 'sign in' />
            </button>
            <CalculatorButton 
                openApp = { props.openApp }
                title = { props.storage.app }
            />
            <form className = 'settings-form' onSubmit = { e => e.preventDefault() }>
                <label style = { { boxShadow : `0 0 ${props.size * 0.01}px ${props.boxShadows.light}` } }>
                    <div className = { `form-description-wrapper form-description-wrapper-${ props.theme }` }>
                        <span style = { { fontSize : props.size * 0.034 } }>
                            { props.storage.settings.theme }
                        </span>
                        <div 
                            className = 'triangle' 
                            style = { { borderWidth : props.size * 0.0380517 } }
                        ></div>
                    </div>
                    <select 
                        value = { props.theme }
                        onChange = { e => props.changeTheme(e.target.value) }
                        style = { { fontSize : props.size * 0.034 } }
                    > 
                        { themes }
                    </select>
                </label>
                <label style = { { boxShadow : `0 0 ${props.size * 0.01}px ${props.boxShadows.light}` } }>
                <div className = { `form-description-wrapper form-description-wrapper-${ props.theme }` }>
                        <span style = { { fontSize : props.size * 0.034 } }>
                            { props.storage.settings.language }
                        </span>
                        <div 
                            className = 'triangle' 
                            style = { { borderWidth : props.size * 0.0380517 } }
                        ></div>
                    </div>
                    <select 
                        value = {props.language }
                        onChange = { e => props.changeLanguage(e.target.value) }
                        style = { { fontSize : props.size * 0.034 } }
                    > 
                        { languages }
                    </select>
                </label>
            </form>
        </div>
    )
}

export default Settings;