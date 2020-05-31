import React, { Component } from "react"
import { fetchResources, renderState } from "../utils/helpers"

class PizzaComponent extends Component {
  state = {
    pizzaBase: null,
    pizzaSauce: null,
    pizzaTopping: null,
  }

  componentDidMount() {
    this.fetchPizzaResources()
  }

  fetchPizzaResources = async () => {
    const data = await fetchResources("http://localhost:3000/pizza", "GET")
    return this.setState({
      pizzaBase: data.pizzaBase,
      pizzaSauce: data.pizzaSauce,
      pizzaTopping: data.pizzaTopping,
    })
  }

  render() {
    if (!this.state.pizzaBase) {
      return <div>Loading Pizza Base</div>
    }
    return (
      <div>
        {/* <div>{renderState(this.state.pizzaBase)}</div>
        <br />
        <div>{renderState(this.state.pizzaSauce)}</div>
        <br />
        <div>{renderState(this.state.pizzaTopping)}</div>
        <br /> */}
      </div>
    )
  }
}

export default PizzaComponent
