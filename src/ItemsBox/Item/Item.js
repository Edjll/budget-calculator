import React, { Component } from 'react';
import './css/Item.css';
import imageEdit from './image/edit.svg';
import imageDelete from './image/delete.svg';
import imageRefresh from './image/refresh.svg';

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editing : false,
            deleting : false,
            value : props.value
        }
    }

    editingValue() {
        const state = this.state;
        state.editing = !this.state.editing;
        this.setState(state);
    }

    deleteItem() {
        const state = this.state;
        state.deleting = true;
        this.setState(state);
    }

    deletingItem() {
        this.deleteItem();
        setTimeout(() => this.props.deleteItem(this.props.id), 400);
    }

    editValue() {
        if (this.state.value.length) {
            this.editingValue();
            const state = this.state;
            state.value = this.props.transformValue(this.state.value);
            this.setState(state);
            this.props.changeItemValue(this.props.id, this.props.transformValue(this.state.value));
        }
    }

    inputValue(e) {
        const state = this.state;
        state.value = this.props.validateValue(e.target);
        this.setState(state);
    }

    render() {
        return (
            <div 
                className = { `item-wrapper${ this.state.deleting ? ' item-deleting' : '' }` }
                style = { { 
                    height : `${ this.props.height * 0.05715 }px`,
                    boxShadow : `0 0 ${this.props.height * 0.006}px ${this.props.boxShadows.light}${this.state.editing ? `, inset 0px 0px ${this.props.height * 0.02}px -${this.props.height * 0.01}px ${this.props.boxShadows.light}` : ''}`
                } }
            >
                <div className = 'item-value'>
                    <input 
                        type = 'text'
                        value = { this.state.value }
                        onChange = { e => this.inputValue(e) }
                        onKeyPress = { e => e.key === 'Enter' ? this.editValue() : null }
                        readOnly = { !this.state.editing }
                        autoFocus = { this.state.editing }
                        style = { { fontSize : `${ this.props.height * 0.034 }px` } }
                    />
                </div>
                <div className = 'item-edit'>
                    <button onClick = { e => this.editValue() } >
                        <img src = { this.state.editing ? imageRefresh : imageEdit } alt = 'edit'/>
                    </button>
                    <button
                        onClick = { e => this.deletingItem() }
                    >
                        <img src = { imageDelete } alt = 'delete' />
                    </button>
                </div>
            </div>
        );
    }
}

export default Item;