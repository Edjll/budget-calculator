import React from 'react';
import settingsImage from './images/settings.svg';
import './css/SettingsButton.css';

const SettingsButton = props => {

    return (
        <button 
            className = { `settings-button${ props.settingsActive === ' settings-active' ? ' settings-button-active' : '' }` }
            onClick = { props.openSettings }
            title = { props.title }
        >
            <img src = { settingsImage } alt = 'settings' />
        </button>
    )
}

export default SettingsButton;