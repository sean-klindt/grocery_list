import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({ items, groceryClick, deleteItem }) => {
  return(
    <div>
      <h2>Grocery List</h2>
      <h3>------------------------</h3>
      <h4>Click an item to cross it off</h4>
      <ul>
        {items.map( item => 
          <Grocery key={item.id} {...item} groceryClick={groceryClick} deleteItem={deleteItem} />
          )
        }

      </ul>
      {/* {
        groceries.map( grocery =>
          <Grocery {...grocery} />
          )
        } */}
    </div>
  )
}

export default GroceryList;