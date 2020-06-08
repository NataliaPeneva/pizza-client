import React, { Component } from "react"
import { renderState, renderButton } from "../utils/helpers"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import { addToBasketAction, fetchPizza } from "../actions"

class PizzaComponent extends Component {
  componentDidMount() {
    this.props.fetchPizza()
  }

  addToBasket = (item) => {
    this.props.addToBasketAction(item)
  }

  render() {
    if (!this.props.pizza) {
      return <div>Loading Pizza Base</div>
    }
    return (
      <div>
        <br />
        <div>{renderState(this.props.pizza, renderButton, this.addToBasket)}</div>
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

const mapStateToProps = (state) => {
  return {
    pizza: state.pizza,
  }
}

const mapDispatchToProps = {
  addToBasketAction,
  fetchPizza,
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaComponent)
