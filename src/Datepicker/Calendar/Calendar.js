import React from 'react';
import Item from '../Item/Item';
import './css/Calendar.css';

const Calendar = props => {

    let items = [];

    if (props.selectable.type === 0) {
        items = props.months;
    } else if (props.selectable.type === 1) {
        for (let i = Math.floor(props.selectable.value / 12) * 12; i < Math.floor((props.selectable.value + 12) / 12) * 12; i++) {
            items.push(i);
        }
    }

    const componentItems = items.map((item, index) => {
        return (
            <Item 
                key = {index}
                description = {item}
                selectable = {props.selectable.type}
                selected = {props.selectable.type === 0 
                    ? props.date.year === props.selectable.value
                        ? item === props.date.month 
                        : false
                    : item === props.date.year}
                changeDate = {props.changeDate}
                size = { props.size }
            />
        )
    });

    return (
        <div 
            className = 'datepicker-calendar' 
            tabIndex = '0'
            style = { { 
                boxShadow : `0 0 ${props.size * 0.01}px ${props.boxShadows.light}`,
                borderWidth : `${props.size * 0.003}px`
            } }
        >
            <div className = 'datepicker-switcher'>
                <button
                    onClick = { e => props.changeSelectableValue(false) }
                >
                    <span 
                        style = { { fontSize : props.size * 0.03 } }
                    >‹</span>
                </button>
                <button
                    onClick = {e => props.changeSelectableType(false)}
                    style = { { fontSize : props.size * 0.03 } }
                >
                    {props.selectable.type === 0 ? props.selectable.value : `${items[0]}-${items[items.length - 1]}`}
                </button>
                <button
                    onClick = { e => props.changeSelectableValue(true) }
                >
                    <span
                        style = { { fontSize : props.size * 0.03 } }
                    >›</span>
                </button>
            </div>
            <div className = 'datepicker-months'>
                { componentItems }
            </div>
        </div>
    )
}

export default Calendar;