import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({ groceries }) => {
  return(
    <>
      {
        groceries.map( grocery =>
          <Grocery {...grocery} />
          )
        }
    </>
  )
}

export default GroceryList;