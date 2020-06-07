import React, { Component } from "react"
import { fetchResources, renderState, renderButton } from "../utils/helpers"
import { Link } from "react-router-dom"
import Button from "@material-ui/core/Button"
import { connect } from "react-redux"
import { addToBasketAction } from "../actions"

class ExtrasComponent extends Component {
  state = {
    extras: null,
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

  addToBasket = (item) => {
    this.props.addToBasketAction(item)
  }

  render() {
    if (!this.state.extras) {
      return <div>Loading Extras</div>
    }
    return (
      <div>
        <div>{renderState(this.state.extras, renderButton, this.addToBasket)}</div>
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

const mapDispatchToProps = {
  addToBasketAction,
}

export default connect(null, mapDispatchToProps)(ExtrasComponent)
