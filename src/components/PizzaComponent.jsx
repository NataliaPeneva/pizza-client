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

  renderState = (pizzaArray) => {
    const updState = pizzaArray.map((pizComp, i) => {
      return (
        <div key={i}>
          {pizComp.name} {pizComp.price}
        </div>
      )
    })
    return updState
  }

  render() {
    if (!this.state.pizzaBase) {
      return <div>Loading Pizza Base</div>
    }
    return (
      <div>
        <div>{this.renderState(this.state.pizzaBase)}</div>
        <br />
        <div>{this.renderState(this.state.pizzaSauce)}</div>
        <br />
        <div>{this.renderState(this.state.pizzaTopping)}</div>
        <br />
      </div>
    )
  }
}

export default PizzaComponent
