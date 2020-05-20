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
                    <span style = { { fontSize : this.props.height * 0.03 } }>
                        { this.props.money.title }
                    </span>
                    <span style = { { fontSize : this.props.height * 0.03 } }>
                        { this.transformMoney(this.props.money.value.all) }
                    </span>
                </div>
                <div className = 'display-month-money'>
                    <span style = { { fontSize : this.props.height * 0.05 } }>
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