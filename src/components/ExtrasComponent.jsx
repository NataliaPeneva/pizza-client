import React, { Component } from "react"
import { fetchResources, renderState, renderButton } from "../utils/helpers"

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
    this.props.addItemToBasket(item)
  }

  render() {
    if (!this.state.extras) {
      return <div>Loading Extras</div>
    }
    return (
      <div>
        <div>
          {renderState(this.state.extras, renderButton, this.addToBasket)}
        </div>
      </div>
    )
  }
}

export default ExtrasComponent
