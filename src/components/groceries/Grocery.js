const Grocery = ({ id, item, price, complete }) => {
  return(
    <>
      <h1 style={ complete ? {...styles.complete} : {}}>{item} - {price}</h1>
    </>
  )
}

const styles = {
  complete: {
    color: "grey",
    textDecoration: 'line-through',
  }
}


export default Grocery;