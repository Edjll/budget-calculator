import React from 'react';
import calculatorImage from './images/calculator.svg';
import './css/CalculatorButton.css';

const CalculatorButton = props => {

    return (
        <button 
            className = { `calculator-button` }
            onClick = { props.openApp }
            title = { props.title }
        >
            <img src = { calculatorImage } alt = 'app' />
        </button>
    )
}

export default CalculatorButton;