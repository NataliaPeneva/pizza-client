import React, { Component } from "react"
import { fetchResources, renderState, renderButton } from "../utils/helpers"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

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

  addToBasket = (item) => {
    this.props.addItemToBasket(item)
  }

  render() {
    if (!this.state.pizzaBase) {
      return <div>Loading Pizza Base</div>
    }
    return (
      <div>
        <br />
        <div>{renderState(this.state.pizzaBase, renderButton, this.addToBasket)}</div>
        <br />
        <div>{renderState(this.state.pizzaSauce, renderButton, this.addToBasket)}</div>
        <br />
        <div>{renderState(this.state.pizzaTopping, renderButton, this.addToBasket)}</div>
        <br />
        <br />
        <br />
        <Link to="/extras">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#80ed99",
              color: "#0b3954",
            }}
            size="small"
          >
            Choose some extras!
          </Button>
        </Link>
      </div>
    )
  }
}

export default PizzaComponent
