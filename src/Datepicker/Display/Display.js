import React from 'react';
import './css/Display.css';

const Display = props => {
    return (
        <div className = 'datapicker-display'>
            <input
                type = 'text'
                value = { props.selected.month }
                onClick = { e => props.calendarVisible(e.target.parentNode.nextElementSibling) }
                style = { { fontSize : `${ props.height * 0.04 }px` } }
                readOnly
            />
            <input
                type = 'text'
                value = { props.selected.year }
                onFocus = { e => props.calendarVisible(e.target.parentNode.nextElementSibling) }
                style = { { fontSize : `${ props.height * 0.025 }px` } }
                readOnly
            />
        </div>
    );
}

export default Display;