import React from 'react';

const Grocery = ({ id, product, price, complete, groceryClick, deleteItem }) => {
  const handleDelete = () => {
    deleteItem(id);
  };

  return(
    <>
    <li
      style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
      onClick={ () => groceryClick(id) }
    >
      { product } - ${ price } 
      {/* <button onClick={onRemove(id)}>Delete</button> */}
    </li>
      <button onClick={handleDelete}>Remove</button>
      <br/>
      <br/>
      </>
    );
  };

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: "grey", textDecoration: 'line-through'},
};


export default Grocery;