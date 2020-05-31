import React, { Component } from "react"
import { fetchResources, renderState } from "../utils/helpers"
import Button from "@material-ui/core/Button"

class ExtrasComponent extends Component {
  state = {
    extras: null,
    basket: [],
  }

  componentDidMount() {
    this.fetchExtras()
  }

  fetchExtras = async () => {
    //   Alternative to the async-await
    // fetchResources("http://localhost:3000/extras", "GET")
    //   .then((response) => {
    //     console.log("response from component:", response)
    //     this.setState({ extras: response.extras })
    //   })
    //   .catch((error) => {
    //     console.log("error", error)
    //   })

    const data = await fetchResources("http://localhost:3000/extras", "GET")
    return this.setState({ extras: data.extras })
  }

  renderButton = (addToBasket, item) => {
    return (
      <Button
        variant="contained"
        color="primary"
        onClick={() => addToBasket(item)}
      >
        Add To Basket
      </Button>
    )
  }

  addToBasket = (item) => {
    return this.setState({ basket: [...this.state.basket, item] })
  }

  render() {
    if (!this.state.extras) {
      return <div>Loading Extras</div>
    }
    return (
      <div>
        <div>
          Basket: €
          {this.state.basket.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
          }, 0)}
        </div>
        <br />
        <div>
          {renderState(this.state.extras, this.renderButton, this.addToBasket)}
        </div>
      </div>
    )
  }
}

export default ExtrasComponent
