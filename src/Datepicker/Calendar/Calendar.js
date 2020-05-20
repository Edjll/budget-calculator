import React, { Component } from 'react';
import Item from '../Item/Item';
import './css/Calendar.css';

class Calendar extends Component {

    render() {
        let items = [];

        if (this.props.selectable.type === 0) {
            items = this.props.months;
        } else if (this.props.selectable.type === 1) {
            for (let i = Math.floor(this.props.selectable.value / 12) * 12; i < Math.floor((this.props.selectable.value + 12) / 12) * 12; i++) {
                items.push(i);
            }
        }

        const componentItems = items.map((item, index) => {
            return (
                <Item 
                    key = {index}
                    description = {item}
                    selectable = {this.props.selectable.type}
                    selected = {this.props.selectable.type === 0 
                        ? this.props.date.year === this.props.selectable.value
                            ? item === this.props.date.month 
                            : false
                        : item === this.props.date.year}
                    changeDate = {this.props.changeDate}
                    height = { this.props.height }
                />
            )
        });

        return (
            <div 
                className = 'datepicker-calendar' 
                tabIndex = '0'
            >
                <div className = 'datepicker-switcher'>
                    <button
                        onClick = { e => this.props.changeSelectableValue(false) }
                    >
                        <span 
                            style = { { fontSize : this.props.height * 0.03 } }
                        >‹</span>
                    </button>
                    <button
                        onClick = {e => this.props.changeSelectableType(false)}
                        style = { { fontSize : this.props.height * 0.03 } }
                    >
                        {this.props.selectable.type === 0 ? this.props.selectable.value : `${items[0]}-${items[items.length - 1]}`}
                    </button>
                    <button
                        onClick = { e => this.props.changeSelectableValue(true) }
                    >
                        <span
                            style = { { fontSize : this.props.height * 0.03 } }
                        >›</span>
                    </button>
                </div>
                <div className = 'datepicker-months'>
                    { componentItems }
                </div>
            </div>
        )
    }
}

export default Calendar;