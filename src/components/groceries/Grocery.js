import React from 'react';

const Grocery = ({ id, product, price, complete, groceryClick }) => {
  return(
    <li
      style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery }
      onClick={ () => groceryClick(id) }
    >
      { product } - { price }
    </li>
    )
  };
// {
//   return(
//     <>
//       <h1 style={ complete ? {...styles.complete} : {}}>{product} - {price}</h1>
//     </>
//   )
// }

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: "grey", textDecoration: 'line-through'},
};


export default Grocery;