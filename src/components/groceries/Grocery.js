import React from 'react';

const Grocery = ({ id, product, price, complete, groceryClick, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(product.id);
  };

  return(
    <li
      style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
      onClick={ () => groceryClick(id) }
    >
      { product } - ${ price } 
      {/* <button onClick={onRemove(id)}>Delete</button> */}
      <button onClick={handleDelete}>Remove</button>
    </li>
    );
  };

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: "grey", textDecoration: 'line-through'},
};


export default Grocery;