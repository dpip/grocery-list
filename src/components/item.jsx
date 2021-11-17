import React, { useState, useEffect } from 'react';
import Button from './button';

const Item = (props) => {

    const [item, setItem] = useState(props.itemName)
    const handleEditItem = (e) => {
        setItem(e.target.value)
    }
    return (
    <div id={props.itemID} className={'grocery-item'}>
      <div className={'grocery-item-name'}>{props.itemName}</div>
      <div className={'grocery-img-container'}>
        <img src={'https://via.placeholder.com/150/FFFFFF'} className={'grocery-item-img'}></img>
      </div>
      <input value={item} onChange={handleEditItem}/>
      <div className={'container-grocery-item-controls'}>
        <Button action={() => props.edit(item, props.itemIndex)} text={'edit'} type={'btn-edit'}/>
        <Button action={props.delete} text={'delete'} type={'btn-delete'}/>
      </div>
      
    </div>
    )
}

export default Item;
