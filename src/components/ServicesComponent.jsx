import React, { Component } from "react"
import { fetchResources, renderState, renderButton } from "../utils/helpers"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

class ServicesComponent extends Component {
  state = {
    services: null,
  }

  componentDidMount() {
    this.fetchServices()
  }

  fetchServices = async () => {
    const data = await fetchResources("http://localhost:3000/services", "GET")
    return this.setState({ services: data.services })
  }

  addToBasket = (item) => {
    this.props.addItemToBasket(item)
  }

  render() {
    if (!this.state.services) {
      return <div>Loading Services</div>
    }
    // return <div>{renderState(this.state.services)}</div>
    return (
      <div>
        <div>{renderState(this.state.services, renderButton, this.addToBasket)}</div>
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

export default ServicesComponent
