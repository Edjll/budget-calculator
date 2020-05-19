import React from 'react';
import './css/Item.css';

const Item = props => {

    return (
        <button 
            className = 'datepicker-item'
            onClick = { e => props.changeDate(e.target.innerText) }
        >
            <span className = { props.selected ? 'selected' : '' }>
                { props.selectable === 0 ? props.description.slice(0, 3) : props.description }
            </span>
        </button>
    )
}

export default Item;