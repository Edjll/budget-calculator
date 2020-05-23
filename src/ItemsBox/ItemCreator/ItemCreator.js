import React, { Component } from 'react';
import imageSave from './image/save.svg';
import './css/ItemCreator.css';

class ItemCreator extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            value : '',
            focus : false
        };
    }

    clearInput() {
        const state = this.state;
        state.value = '';
        this.setState(state);
    }

    inputValue(e) {
        const state = this.state;
        state.value = this.props.validateValue(e.target);
        this.setState(state);
    }

    createItem() {
        if (this.state.value.length) {
            const value = this.props.transformValue(this.state.value);
            if (this.props.checkValue(value)) {
                this.props.createItem(value);
                this.clearInput();
            }
        }
    }
    
    changeFocus() {
        const state = this.state;
        state.focus = !state.focus;
        this.setState(state);
    }

    render() {
        return (
            <div 
                className = 'item-creator-wrapper'
                onFocus = { e => this.changeFocus() }
                onBlur = { e => this.changeFocus() }
                style = { { 
                    height : `${ this.props.size * 0.05715 }px`,
                    boxShadow : `0 0 ${this.props.size * 0.006}px ${this.props.boxShadows.light}${this.state.focus ? `, inset 0px 0px ${this.props.size * 0.02}px -${this.props.size * 0.01}px ${this.props.boxShadows.light}` : ''}`
                } }
            >
                <div className = 'item-creator-value'>
                    <input
                        type = 'text'
                        value = { this.state.value }
                        onChange = { e => this.inputValue(e) }
                        onKeyPress = { e => e.key === 'Enter' ? this.createItem(e) : null }
                        style = { { fontSize : `${ this.props.size * 0.034 }px` } }
                    />
                </div>
                <div className = 'item-creator-save'>
                    <button onClick = { e => this.createItem() } >
                        <img src = { imageSave } alt = 'save' />
                    </button>
                </div>
            </div>
        )
    }
}

export default ItemCreator;