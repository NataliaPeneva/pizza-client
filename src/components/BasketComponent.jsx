import React, { Component } from "react"
import { connect } from "react-redux"

class BasketComponent extends Component {
  state = {
    totalBill: 0,
    numberOfProducts: 0,
    nameOfProducts: [],
  }

  componentDidUpdate(prevProps) {
    if (prevProps.basket !== this.props.basket) {
      return this.setState({
        totalBill: this.props.basket.reduce((accumulator, currentValue) => {
          return accumulator + currentValue.price
        }, 0),
        numberOfProducts: this.props.basket.length,
        nameOfProducts: this.props.basket.map((item) => {
          return item.name
        }),
      })
    }
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "flex-end", width: "100vw" }}>
        <div style={{ margin: 50 }}>
          <div> Basket: €{this.state.totalBill}</div>
          <div>Number of products: {this.state.numberOfProducts}</div>
          <div>Selected products/services: {this.state.nameOfProducts.join(", ")}</div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    basket: state.basket,
  }
}

export default connect(mapStateToProps)(BasketComponent)
