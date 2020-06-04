import React, { Component } from "react"
import PizzaComponent from "./components/PizzaComponent"
import ExtrasComponent from "./components/ExtrasComponent"
import ServicesComponent from "./components/ServicesComponent"
import { Switch, Route, Link } from "react-router-dom"
import Button from "@material-ui/core/Button"

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
        <br />
        <br />
        <br />
        <div>
          Basket: €
          {this.state.basket.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.price
          }, 0)}
        </div>
        <Switch>
          <Route exact path="/">
            <Link to="/pizza">
              <Button variant="contained" color="primary">
                Make a Pizza
              </Button>
            </Link>
          </Route>
          <Route
            exact
            path="/pizza"
            render={() => <PizzaComponent addItemToBasket={this.addItemToBasket} />}
          />
          <Route
            exact
            path="/extras"
            render={() => <ExtrasComponent addItemToBasket={this.addItemToBasket} />}
          />
          <Route
            exact
            path="/services"
            render={() => <ServicesComponent addItemToBasket={this.addItemToBasket} />}
          />
        </Switch>
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
