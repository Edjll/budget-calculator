import React, { Component } from 'react';
import ItemCreator from './ItemCreator/ItemCreator';
import Item from './Item/Item';
import './css/ItemsBox.css';

class ItemsBox extends Component {

  changeItemValue = (id, value) => {
    this.props.changeItemValue(this.props.description, id, value);
  }

  deleteItem = id => {
    this.props.deleteItem(this.props.description, id);
  }

  validateValue = target => {
    let result = target.value;
    const selection = target.selectionStart;
    if (!/\d|\.|(undefined)/.test(result[selection - 1])) {
      result = result.slice(0, selection - 1) + result.slice(selection);
      target.selectionStart = selection - 1;
      target.selectionEnd = selection - 1;
    } else {
      if (result[0] === '.') {
        result = '0' + result;
      }
      if (/((?<=\.\d{2})\d+)|(^0{2,})|((?<=\d*\.\d*)\.)|(^0(?=\d))/.test(result)) {
        result = result.replace(/((?<=\.\d{2})\d+)|(^0{2,})|((?<=\d*\.\d*)\.)|(^0(?=\d))/g, '');
        target.selectionStart = selection;
        target.selectionEnd = selection;
      }
      if (result.length > 10) {
        result = result.slice(0, 11);
      }
    }
    return result;
  }

  transformValue = value => {
    return value.replace(/\.0*(?!\d+)/g, '').replace(/(?<=\.\d)(?!\d)/g, '0');
  }

  checkValue(value) {
    if (value.length) {
      if (value.length === 1 && value[0] === '0') return false;
      return true;
    } else return false;
  }

  createItem = value => {
    this.props.createItem(this.props.description, value);
  }

  render() {
    const items = this.props.items.map(item => {
      return (
        <Item
          key = { item.id }
          id = { item.id }
          value = { item.value }
          validateValue = { this.validateValue }
          changeItemValue = { this.changeItemValue }
          deleteItem = { this.deleteItem }
          transformValue = { this.transformValue }
          height = { this.props.height }
          boxShadows = { this.props.boxShadows }
        />
      );
    });

    return (
      <div className = 'items-box'>
        <p style = { { fontSize : `${ this.props.height * 0.04 }px` } }>
          { this.props.title }
        </p>
        <ItemCreator
            validateValue = { this.validateValue }
            createItem = { this.createItem }
            transformValue = { this.transformValue }
            checkValue = { this.checkValue }
            height = { this.props.height }
            boxShadows = { this.props.boxShadows }
        />
        <div className = 'items'>
            { items }
        </div>
      </div>
    )
  }
}

export default ItemsBox;