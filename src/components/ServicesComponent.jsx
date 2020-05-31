import React, { Component } from "react"
import { fetchResources, renderState } from "../utils/helpers"

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

  render() {
    if (!this.state.services) {
      return <div>Loading services</div>
    }
    // return <div>{renderState(this.state.services)}</div>
    return <div></div>
  }
}

export default ServicesComponent
