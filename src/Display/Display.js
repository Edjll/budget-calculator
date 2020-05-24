import React from 'react';
import './css/Display.css';
import SettingsButton from '../SettingsButton/SettingsButton';

const Display = props => {

    const transformMoney = value => {
        return String(value).replace(/(?<=\.\d)(?!\d)/g, '0');
    }
    return (
        <div className = { `display` }>
            <div className = 'display-all-money'>
                <span style = { { fontSize : props.size * 0.03 } }>
                    { props.money.title }
                </span>
                <span style = { { fontSize : props.size * 0.03 } }>
                    { transformMoney(props.money.value.all) }
                </span>
            </div>
            <div className = 'display-month-money'>
                <span style = { { fontSize : props.size * 0.05 } }>
                    { transformMoney(props.money.value.month) }
                </span>
            </div>
            <SettingsButton 
                settingsActive = { props.settingsActive }
                openSettings = { props.openSettings }
                title = { props.storage.settings }
            />
        </div>
    )
}

export default Display;