import React, { Component } from "react"
import PizzaComponent from "./components/PizzaComponent"
import ExtrasComponent from "./components/ExtrasComponent"
import ServicesComponent from "./components/ServicesComponent"

class App extends Component {
  state = {
    basket: [],
  }

  addItemToBasket = (item) => {
    return this.setState({ basket: [...this.state.basket, item] })
  }

  render() {
    return (
      <div>
        <div>
          Basket: €
          {this.state.basket.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
          }, 0)}
        </div>
        <div className="App">
          <PizzaComponent addItemToBasket={this.addItemToBasket} />
        </div>
        <br />
        <div className="App">
          <ExtrasComponent addItemToBasket={this.addItemToBasket} />
        </div>
        <br />
        <div className="App">
          <ServicesComponent addItemToBasket={this.addItemToBasket} />
        </div>
      </div>
    )
  }
}

// function App() {

//   return (
//     <div>

//       <div className="App">
//         <PizzaComponent />
//       </div>
//       <br />
//       <div className="App">
//         <ExtrasComponent  />
//       </div>
//       <br />
//       <div className="App">
//         <ServicesComponent />
//       </div>
//     </div>
//   )
// }

export default App
