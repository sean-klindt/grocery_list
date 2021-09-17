import { Component } from 'react';

class GroceryList extends Component {
  state = { product: '', price: '', complete: false}

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGrocery(this.state)
    this.setState({ product: '', price: '', complete: false })
  }

  render (){
    const { product, price } = this.state
    return(
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            name="product"
            value={product}
            onChange={this.handleChange}

            required
            placeholder="Add item"
            />
            <input
              name="price"
              value={price}
              onChange={this.handleChange}
              
              required
              placeholder="Add price"
              />
            <button type="submit">Submit</button>
        </form>
      </>
    )
  }
}

export default GroceryList;