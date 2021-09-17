import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({ items, groceryClick }) => {
  return(
    <div>
      <h2>Grocery List</h2>
      <ul>
        {items.map( item => 
        <Grocery 
          key={item.id} {...item}
          groceryClick={groceryClick}
          // id={grocery.id} 
          // grocery={grocery.product} 
          // price={grocery.price} 
          // complete={grocery.complete}
          /> )}
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