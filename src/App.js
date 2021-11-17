
import React, { useState, useEffect } from 'react';

import './index.scss'

import GroceryList from './components/groceryList';

const groceries = [{
  id: "6abce9cc-c638-4e8a-b683-03e6b01fbac9",
  name: "ice cream"
}, {
  id: "3833fadc-82f5-4809-90d0-cd8feac67369",
  name: "frozen pizza"
}, {
  id: "943d17ea-b1f3-4c9d-81a5-7f528d4c9b5f",
  name: "bread"
}];

const App = () => {
  const [groceryList, updateGroceryList] = useState([]);

  useEffect(() => {
    updateGroceryList(groceries);
  }, []);

  return (
    <div className="App">
      <GroceryList items={groceryList} update={updateGroceryList}/>
    </div>
  );
}

export default App;