import React, { Component } from "react"
import axios from "axios"

class PizzaComponent extends Component {
  state = {
    pizzaBase: null,
    pizzaSauce: null,
    pizzaTopping: null,
  }

  componentDidMount() {
    this.fetchPizzaResources()
  }

  fetchPizzaResources = () => {
    const axiosOptions = {
      url: "http://localhost:3000/pizza",
      method: "GET",
    }

    axios(axiosOptions)
      .then((response) => {
        this.setState({
          pizzaBase: response.data.pizzaBase,
          pizzaSauce: response.data.pizzaSauce,
          pizzaTopping: response.data.pizzaTopping,
        })
      })
      .catch((error) => {
        return error
      })
  }

  render() {
    return (
      <div>
        <div>Pizza Base</div>
        <div>Pizza Sauce</div>
        <div>Pizza Topping</div>
      </div>
    )
  }
}

export default PizzaComponent
