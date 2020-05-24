import React from 'react';
import ItemCreator from './ItemCreator/ItemCreator';
import Item from './Item/Item';
import './css/ItemsBox.css';

const ItemsBox = props => {

  const changeItemValue = (id, value) => {
    props.changeItemValue(props.description, id, value);
  }

  const deleteItem = id => {
    props.deleteItem(props.description, id);
  }

  const validateValue = target => {
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

  const transformValue = value => {
    return value.replace(/\.0*(?!\d+)/g, '').replace(/(?<=\.\d)(?!\d)/g, '0');
  }

  const checkValue = value => {
    if (value.length) {
      if (value.length === 1 && value[0] === '0') return false;
      return true;
    } else return false;
  }

  const createItem = value => {
    props.createItem(props.description, value);
  }

  const items = props.items.map(item => {
    return (
      <Item
        key = { item.id }
        id = { item.id }
        value = { item.value }
        validateValue = { validateValue }
        changeItemValue = { changeItemValue }
        deleteItem = { deleteItem }
        transformValue = { transformValue }
        size = { props.size }
        boxShadows = { props.boxShadows }
      />
    );
  });

  return (
    <div className = 'items-box'>
      <p style = { { fontSize : `${ props.size * 0.04 }px` } }>
        { props.title }
      </p>
      <ItemCreator
          validateValue = { validateValue }
          createItem = { createItem }
          transformValue = { transformValue }
          checkValue = { checkValue }
          size = { props.size }
          boxShadows = { props.boxShadows }
      />
      <div className = 'items'>
          { items }
      </div>
    </div>
  )
}

export default ItemsBox;