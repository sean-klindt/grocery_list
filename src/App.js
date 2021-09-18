import { Component } from "react"; 
import GroceryList from './components/groceries/GroceryList';
import GroceryForm from './components/groceries/GroceryForm';

class App extends Component {
  state = {
    groceries: [
      { id: 1, product: "milk", price: 2.34, complete: false },
      { id: 2, product: "bread", price: 3.17, complete: false },
      { id: 3, product: "eggs", price: 2.04, complete: false },
      { id: 4, product: "peaches", price: 1.55, complete: false },
      { id: 5, product: "corn", price: 1.25, complete: false },
    ]
  };

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
  }

  addGrocery = (incomingGrocery) => {
    const { groceries } = this.state
    const newGrocery = { id: this.getUniqId(), ...incomingGrocery }

    this.setState({ groceries: [newGrocery, ...groceries]})
  }

  handleClick = (id) => {
    const { groceries } = this.state;
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            complete: !grocery.complete
          }
        }
        return grocery
      })
    })
  }

  // onRemove = id => (e) => { 
  //   // this.state(groceries.filter(grocery => grocery.id !== id))
  // };

  // onRemove = (id) => {
  //   const { groceries } = this.state;
  //   this.setState({
  //     groceries: groceries.filter( grocery => grocery.id !== id)
  //   })
  // }

  deleteItem = (id) => {
    let newGroceryList = this.state.groceries.filter((product) => id !== product.id);
    this.setState({ groceries: newGroceryList });
  };

  render (){
    // const { groceries } = this.state
    return (
      <>
        <GroceryList 
          name="Grocery List" 
          items={this.state.groceries} 
          groceryClick={this.handleClick} 
          // onRemove={this.onRemove}
          deleteItem={this.deleteItem}
          />

        <GroceryForm 
          addGrocery={this.addGrocery} />
      </>
    )
  }
}





export default App;
