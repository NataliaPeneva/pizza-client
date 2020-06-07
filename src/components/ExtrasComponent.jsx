import React, { Component } from "react"
import { fetchResources, renderState, renderButton } from "../utils/helpers"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import { addToBasketAction, fetchExtras } from "../actions"

class ExtrasComponent extends Component {
  componentDidMount() {
    this.props.fetchExtras()
  }

  addToBasket = (item) => {
    this.props.addToBasketAction(item)
  }

  render() {
    if (!this.props.extras) {
      return <div>Loading Extras</div>
    }
    return (
      <div>
        <div>{renderState(this.props.extras, renderButton, this.addToBasket)}</div>
        <br />
        <br />
        <br />
        <Link to="/services">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#80ed99",
              color: "#0b3954",
              size: "small",
            }}
          >
            Choose how to get your pizza!
          </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    extras: state.extras,
  }
}

const mapDispatchToProps = {
  addToBasketAction,
  fetchExtras,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtrasComponent)
