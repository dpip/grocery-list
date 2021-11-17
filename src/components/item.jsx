import React, { useState, useEffect } from 'react';
import Button from './button';

const Item = (props) => {

    const [item, setItem] = useState(props.itemName)
    const handleEditItem = (e) => {
        setItem(e.target.value)
    }
    return (
    <div id={props.itemID} className={'grocery-item'}>
      <img className={'grocery-item-img'}></img>
      <div className={'grocery-item-name'}>{props.itemName}</div>
      <input value={item} onChange={handleEditItem}/>
      <Button action={() => props.edit(item, props.itemIndex)} text={'edit'}/>
      <Button action={props.delete} text={'delete'}/>
    </div>
    )
}

export default Item;
