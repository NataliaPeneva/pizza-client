import React, { Component } from "react"
import { renderState, renderButton } from "../utils/helpers"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import { addToBasketAction, fetchServices } from "../actions"
class ServicesComponent extends Component {
  componentDidMount() {
    this.props.fetchServices()
  }

  addToBasket = (item) => {
    this.props.addToBasketAction(item)
  }

  render() {
    if (!this.props.services) {
      return <div>Loading Services</div>
    }
    return (
      <div>
        <div>{renderState(this.props.services, renderButton, this.addToBasket)}</div>
        <br />
        <br />
        <br />
        <Link to="/">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#80ed99",
              color: "#0b3954",
              size: "small",
            }}
          >
            Want more pizza?
          </Button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    services: state.services,
  }
}

const mapDispatchToProps = {
  addToBasketAction,
  fetchServices,
}
export default connect(mapStateToProps, mapDispatchToProps)(ServicesComponent)
