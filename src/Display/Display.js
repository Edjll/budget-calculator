import React, { Component } from 'react';
import './css/Display.css';
import SettingsButton from '../SettingsButton/SettingsButton';

class Display extends Component {

    transformMoney(value) {
        return String(value).replace(/(?<=\.\d)(?!\d)/g, '0');
    }

    render() {
        return (
            <div className = { `display` }>
                <div className = 'display-all-money'>
                    <span>
                        { this.props.money.title }
                    </span>
                    <span>
                        { this.transformMoney(this.props.money.value.all) }
                    </span>
                </div>
                <div className = 'display-month-money'>
                    <span>
                        { this.transformMoney(this.props.money.value.month) }
                    </span>
                </div>
                <div className = 'display-settings-button'>
                    <SettingsButton 
                        settingsActive = { this.props.settingsActive }
                        openSettings = { this.props.openSettings }
                    />
                </div>
            </div>
        )
    }
}

export default Display;