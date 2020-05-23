import React from 'react';
import './css/Display.css';

const Display = props => {
    return (
        <div 
            className = 'datapicker-display'
            style = { { boxShadow : `0 0 ${ props.size * 0.01 }px ${ props.boxShadows.light }` } }
        >
            <input
                type = 'text'
                value = { props.selected.month }
                onClick = { e => props.calendarVisible(e.target.parentNode.nextElementSibling) }
                style = { { fontSize : `${ props.size * 0.04 }px` } }
                readOnly
            />
            <input
                type = 'text'
                value = { props.selected.year }
                onFocus = { e => props.calendarVisible(e.target.parentNode.nextElementSibling) }
                style = { { fontSize : `${ props.size * 0.025 }px` } }
                readOnly
            />
        </div>
    );
}

export default Display;