import React, { useState, useEffect } from 'react';
import Item from './item';
import Button from './button';


const GroceryList = (props) => {

  const [groceryListState, updateGroceryListState] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleNewItem = (e) => {
    setNewItem({id: '', name: e.target.value})
  }

  const createItem = () => {
    const arr = [...groceryListState, newItem];
    props.update(arr);
  }

  const editItem = (itemName, index) => {
    const arr = [...groceryListState]
    const itemId = groceryListState[index].id;
    arr[index] = {
      id: itemId,
      name: itemName
    }
    props.update(arr);
  }

  const deleteItem =(index) => {
    const arr = [...groceryListState];
    arr.splice(index, 1);
    props.update(arr)
  }
  
  useEffect(() => {
    updateGroceryListState(props.items);
  }, [props.items]);
    
    return (
    <>
        <div className={'create-grocery-control'}>
            <input value={newItem.name} onChange={handleNewItem} style={{marginBottom: '1rem'}}/>
            <Button action={createItem} text={'Add a grocery'} type={'btn-add'}/>
        </div>
        <h1 style={{width: '85%'}}>Your Groceries</h1>
        <div className={'container-grocery-list'}>
          {groceryListState.map((item, index) => {
              return <Item key={index} itemIndex={index} itemID={item.id} itemName={item.name} edit={editItem} delete={() => deleteItem(index)}/>
          })}
        </div>
      </>
    )
}

export default GroceryList;