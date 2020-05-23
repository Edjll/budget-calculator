import React, { Component } from 'react';
import Calendar from './Calendar/Calendar';
import './css/Datepicker.css';
import Display from './Display/Display';

class Datepicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectable : {
                type : props.selectable.value,
                value : this.props.date.year
            }
        }
    }

    calendarVisible(target) {
        target.focus();
    }

    changeSelectableType(direction) {
        const index = this.state.selectable.type + (direction ? -1 : 1);
        const state = this.state;
        if (index >= 0 && index < this.props.selectable.possible.length) {
            state.selectable.type = index;
            this.setState(state);
        }
    }

    changeSelectableValue(direction) {
        const state = this.state;
        const step = state.selectable.type ? 12 : 1;
        state.selectable.value += direction ? step : -step;
        this.setState(state);
    }

    changeDate(value) {
        if (this.state.selectable.type === 0) {
            this.props.changeDate(this.props.selectable.possible[this.state.selectable.type], this.props.months.map(month => month.slice(0, 3)).indexOf(value), this.state.selectable.value);
        } else {
            this.props.changeDate(this.props.selectable.possible[this.state.selectable.type], Number(value));
            const state = this.state;
            state.selectable.value = Number(value);
            this.setState(state);
        }
        this.changeSelectableType(true);
    }

    render() {
        return (
            <div className = 'datepicker'>
                <Display 
                    selected = { this.props.date }
                    calendarVisible = { this.calendarVisible }
                    size = { this.props.size }
                    boxShadows = { this.props.boxShadows }
                />
                <Calendar
                    months = { this.props.months }
                    date = { this.props.date }
                    selectable = { this.state.selectable }
                    changeDate = { this.changeDate.bind(this) }
                    changeSelectableType = { this.changeSelectableType.bind(this) }
                    changeSelectableValue = { this.changeSelectableValue.bind(this) }
                    size = { this.props.size }
                    boxShadows = { this.props.boxShadows }
                />
            </div>
        )
    }
}

export default Datepicker;