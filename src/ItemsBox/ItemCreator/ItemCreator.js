import React, { Component } from 'react';
import imageSave from './image/save.svg';
import './css/ItemCreator.css';

class ItemCreator extends Component {
    constructor(props) {
        super(props);

        this.state = { value : '' };
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

    render() {
        return (
            <div 
                className = 'item-creator-wrapper'
                style = { { height : `${ this.props.height * 0.05715 }px` } }
            >
                <div className = 'item-creator-value'>
                    <input
                        type = 'text'
                        value = { this.state.value }
                        onChange = { e => this.inputValue(e) }
                        onKeyPress = { e => e.key === 'Enter' ? this.createItem(e) : null }
                        style = { { fontSize : `${ this.props.height * 0.034 }px` } }
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